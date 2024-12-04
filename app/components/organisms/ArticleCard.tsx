import { Link } from '@remix-run/react'
import {
	MdOutlineBusinessCenter,
	MdOutlineTheaters,
	MdOutlineDesktopMac,
	MdOutlineNewspaper,
} from 'react-icons/md'
import siteLogo from '~/assets/svg/site-logo.svg'
import { getArticleImgSrc } from '~/utils/misc.tsx'

interface ArticleCardProps {
	articleId: string
	title: string
	category?: string
	imageId?: string
}

export default function ArticleCard({
	articleId,
	title,
	category = 'General news',
	imageId,
}: ArticleCardProps) {
	const imageSrc = imageId ? getArticleImgSrc(imageId) : siteLogo

	const categoryIcons: { [key: string]: JSX.Element } = {
		Business: (
			<MdOutlineBusinessCenter
				size={20}
				className="text-violet-900 dark:text-violet-300"
			/>
		),
		Entertainment: (
			<MdOutlineTheaters
				size={20}
				className="text-violet-900 dark:text-violet-300"
			/>
		),
		Technology: (
			<MdOutlineDesktopMac
				size={20}
				className="text-violet-900 dark:text-violet-300"
			/>
		),
		'General news': (
			<MdOutlineNewspaper
				size={20}
				className="text-violet-900 dark:text-violet-300"
			/>
		),
	}

	return (
		<Link to={`/article/${articleId}`}>
			<div className="cursor-pointer transition-all duration-500 hover:scale-105">
				<div>
					<img
						src={imageSrc}
						alt={title}
						className="h-64 w-full rounded-t object-cover"
					/>
				</div>
				<div className="flex h-64 flex-col justify-between rounded-b bg-violet-200 p-4 dark:bg-violet-950">
					<h3 className="line-clamp-3 text-xl font-bold dark:text-white">
						{title}
					</h3>

					<div className="flex items-center gap-2">
						{categoryIcons[category]}
						<p className="text-sm text-violet-900 dark:text-violet-300">
							{category}
						</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
