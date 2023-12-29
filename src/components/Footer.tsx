function Footer() {
	return (
		<footer className="py-10 bg-zinc-900">
			<div className="w-10/12 mx-auto text-center">
				<p className="font-geist">
					&copy; {new Date().getFullYear()} BSF + SpaceX{" "}
					<span className="text-sm font-light italic">(Capsule Data)</span>.
					<br />
					<span className="text-xs font-thin text-zinc-800">
						Please select me ;)
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
