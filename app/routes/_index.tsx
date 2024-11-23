import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import { Button } from '~/components/atoms/Button.tsx'
import HeroCallToAction from '~/components/organisms/Hero/HeroCallToAction.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main>
			<HeroCallToAction
				image={heroImage}
				imageRight={true}
				hasBackgroundColour={true}
			>
				<div className="flex h-full flex-1 flex-col justify-between p-16">
					<div className="flex flex-col gap-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
					<Button asChild variant="default" size="lg">
						<Link to="/signup">Sign up</Link>
					</Button>
				</div>
			</HeroCallToAction>
		</main>
	)
}
