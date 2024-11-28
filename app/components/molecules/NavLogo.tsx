import logo from '~/assets/svg/logo-colour.svg'

export default function NavLogo() {
	return (
		<div className="flex h-36 w-36 flex-col items-center justify-center gap-1 rounded-full bg-slate-800 p-6">
			<img src={logo} alt="Epic News Logo" className="w-20" />
			<span className="text-sm text-foreground">Epic News</span>
		</div>
	)
}
