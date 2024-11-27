import { Link, useMatches } from '@remix-run/react'
import NavLogo from '../molecules/NavLogo'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

interface HeaderWithSearchProps {
	isAdminUser: boolean
}
export default function HeaderWithSearch({
	isAdminUser,
}: HeaderWithSearchProps) {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className="dark:bg-dark-primary/10 bg-primary/10 py-6">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<Link to="/">
					<NavLogo />
				</Link>

				<div className="flex flex-1 items-center justify-center gap-8">
					{isAdminUser && (
						<Link
							to="/admin-review"
							className="rounded-lg bg-green-900 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-green-800"
						>
							Admin Review
						</Link>
					)}
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
					>
						News
					</Link>
					<Link
						to="/about-us"
						prefetch="intent"
						className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
					>
						About us
					</Link>
					<Link
						to="/contact-us"
						prefetch="intent"
						className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
					>
						Contact us
					</Link>
				</div>

				<div className="ml-auto hidden max-w-sm flex-1 sm:block">
					{searchBar}
				</div>
				<div className="flex items-center gap-10">
					<LoginOrUserDropdown />
				</div>
				<div className="block w-full sm:hidden">{searchBar}</div>
			</nav>
		</header>
	)
}
