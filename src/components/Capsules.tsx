import { useEffect, useState } from "react";
import Modal from "./Modal";
import { CapsuleType } from "../types";
import Loader from "./Loader";
import Search from "./Search";

function Capsules() {
	const [caps, setCaps] = useState([]);
	const [index, setIndex] = useState<number>(0);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [search, setSearch] = useState("");

	async function getCaps() {
		const req = await fetch("https://api.spacexdata.com/v3/capsules");
		const res = await req.json();
		setCaps(res);
	}

	function handleModal(index: number) {
		setModalOpen(!modalOpen);
		setIndex(index);
	}

	useEffect(() => {
		getCaps();
	}, []);

	if (caps.length > 0) {
		return (
			<section className="py-10">
				<h2 className="font-geist text-2xl mb-5 w-10/12 mx-auto">
					All Capsules
				</h2>
				<Search
					capsules={caps}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					setCaps={setCaps}
					search={search}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					setSearch={setSearch}
				/>
				<div className="flex flex-wrap gap-11 justify-between w-10/12 mx-auto">
					{caps.map((cap: CapsuleType, index) => (
						<div
							onClick={() => handleModal(index)}
							className="text-black rounded p-8 bg-white w-96 min-h-40 cursor-pointer transition-scale duration-500 hover:scale-105"
							key={cap.capsule_serial}
						>
							<p className="text-black text-sm font-geist-mono">
								{cap.capsule_serial}
							</p>
							<p className="text-4xl font-bold mb-3">{cap.type}</p>
							<p className="text-sm font-light mb-3">{cap.details}</p>
							<p className="text-sm font-light font-geist-mono">
								Status: {cap.status.toUpperCase()}
							</p>
						</div>
					))}
					<Modal
						isOpen={modalOpen}
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-expect-error
						handleModal={handleModal}
						data={caps[index]}
					/>
				</div>
			</section>
		);
	} else {
		return <Loader textColor="text-white" />;
	}
}

export default Capsules;
