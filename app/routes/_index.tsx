import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import NoArticlesFound from '#app/components/organisms/NoArticlesFound.tsx'
import gridBkg from '~/assets/png/bkg-grid@2x.png'
import heroImage from '~/assets/png/hero-image.png'
import { Button } from '~/components/atoms/Button.tsx'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'
import ParallaxBackground from '~/components/organisms/Hero/ParallaxBackground.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<main>
			<ParallaxBackground image={gridBkg}>
				<div className="container">
					<HeroCallToAction image={heroImage} imageRight={true}>
						<div className="flex h-full flex-1 flex-col justify-around p-16">
							<div className="flex flex-col gap-8">
								<h2 className="text-7xl font-bold">
									<span className="mb-24 bg-gradient-to-r from-violet-700 to-violet-300 bg-clip-text text-transparent">
										Epic
									</span>{' '}
									News
								</h2>
								<p className="text-lg">
									Keep up to date with the latest tech news.
								</p>
							</div>
							<Button asChild variant="primary" size="lg">
								<Link to="/signup">Sign up</Link>
							</Button>
						</div>
					</HeroCallToAction>
				</div>
			</ParallaxBackground>

			<div className="bg-slate-100 dark:bg-slate-900">
				<div className="container py-16">
					<h2
						id="top-stories"
						className="text-h2 mb-8 font-normal dark:text-white"
					>
						Top stories
					</h2>

					{allArticles.length > 0 ? (
						<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
							{allArticles.map(article => (
								<ArticleCard
									key={article.id}
									articleId={article.id}
									title={article.title}
									category={article.category?.name}
									imageId={article.images[0]?.id}
								/>
							))}
						</div>
					) : (
						<NoArticlesFound />
					)}
				</div>
			</div>
		</main>
	)
}
