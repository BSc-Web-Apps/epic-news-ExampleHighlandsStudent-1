import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { requireUserId } from '#app/utils/auth.server.ts'
import { ArticleEditor } from './__article-editor.tsx'
import { prisma } from '~/utils/db.server.ts'
import { useLoaderData } from '@remix-run/react'

export { action } from './__article-editor.server.tsx'

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserId(request)
	const categories = await prisma.articleCategory.findMany({
		select: {
			id: true,
			name: true,
		},
	})

	return json({ categories })
}

export default function ArticleNew() {
	const data = useLoaderData<typeof loader>()

	return <ArticleEditor categories={data.categories} />
}
