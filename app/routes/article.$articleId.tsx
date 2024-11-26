import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export async function loader({ params }: LoaderFunctionArgs) {
	const { articleId } = params

	return json({ articleId })
}

export default function ArticlePage() {
	const { articleId } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="pb-8 text-h2">My amazing news article</h2>

			<p>Article ID: {articleId}</p>
		</div>
	)
}
