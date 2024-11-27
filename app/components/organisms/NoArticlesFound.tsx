export default function NoArticlesFound() {
	return (
		<div className="flex h-full flex-1 flex-col">
			<h2 className="pb-8 text-h3 font-normal">No articles found 🤔</h2>
			<p className="text-xl">
				It seems there are no published articles to show! Check again later.
			</p>
		</div>
	)
}
