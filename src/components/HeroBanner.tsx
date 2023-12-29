import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { UpcomingCapsulesType } from "../types";
import Loader from "./Loader";

function HeroBanner() {
	const [upcomingCaps, setUpcomingCaps] = useState([]);
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 4000 }),
	]);

	async function getUpcomingCaps() {
		const req = await fetch("https://api.spacexdata.com/v3/capsules/upcoming");
		const res = await req.json();
		setUpcomingCaps(res);
	}

	useEffect(() => {
		getUpcomingCaps();
	}, []);

	if (upcomingCaps) {
		return (
			<div className="bg-white overflow-hidden" ref={emblaRef}>
				<div className="flex w-10/12 h-2/5 bg-white mx-auto">
					{upcomingCaps.map((slide: UpcomingCapsulesType) => (
						<div
							key={slide?.capsule_serial}
							className="w-full embla__slide flex flex-col py-10 bg-white"
						>
							<p className="text-black mb-2 font-geist-mono">
								{slide?.capsule_serial}
							</p>
							<h1 className="font-geist font-bold text-black text-4xl mb-4">
								{slide?.type}
								<span className="text-black text-sm font-normal">
									{" "}
									/ Upcoming /
								</span>
							</h1>
							<p className="text-black">{slide?.details}</p>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return <Loader textColor="text-black" />;
	}
}

export default HeroBanner;
