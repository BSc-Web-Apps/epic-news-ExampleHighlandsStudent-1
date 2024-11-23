import { type LoaderFunctionArgs, json } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	console.log({ category })

	return json({})
}

export default function NewsCategoryPage() {
	return (
		<div className="container py-16">
			<h2 className="text-h2">Generic news category page</h2>
		</div>
	)
}
