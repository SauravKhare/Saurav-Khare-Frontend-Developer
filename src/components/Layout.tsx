import { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";

function Layout({ children }: { children: ReactElement }) {
	return (
		<div className="bg-zinc-950 text-white relative">
			<Navbar />
			<HeroBanner />
			<main className="">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
