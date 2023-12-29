import { CapsuleType } from "../types/index";

function Modal({
	isOpen,
	handleModal,
	data,
}: {
	isOpen: boolean;
	handleModal: (flag: boolean) => boolean;
	data: CapsuleType;
}) {
	const date = new Date(data?.original_launch_unix * 1000);

	if (isOpen) {
		return (
			<div
				onClick={() => handleModal(!isOpen)}
				className="bg-zinc-950 bg-opacity-95 fixed w-full h-full top-0 left-0 flex items-center justify-center"
			>
				<div className="flex flex-col font-geist font-regular rounded absolute bg-white text-black md:p-10 p-2 md:w-6/12">
					<div
						onClick={() => handleModal(!isOpen)}
						className="ml-auto cursor-pointer"
					>
						x
					</div>
					<p className="border-b-2 py-2">
						Capsule Serial : {data.capsule_serial}
					</p>
					<p className="border-b-2 py-2">Capsule ID : {data.capsule_id}</p>
					<p className="border-b-2 py-2">Capsule Status : {data.status}</p>
					<p className="border-b-2 py-2">
						Original Launch Date :{" "}
						{`${date.getDate()} / ${
							date.getMonth() + 1
						} / ${date.getFullYear()}`}
					</p>
					{data.missions.length > 0 ? (
						<p className="border-b-2 py-2">
							{data.missions.map((item) => (
								<span>
									Mission: {item.name} | Flight: {item.flight}
								</span>
							))}
						</p>
					) : null}
					<p className="border-b-2 py-2">
						This capsule has landed {data.landings} times.
					</p>
					<p className="border-b-2 py-2">Capsule Type : {data.type}</p>
					<p className="border-b-2 py-2">{data.details}</p>
					<p className="border-b-2 py-2">
						This capsules has been reused {data.reuse_count} times.
					</p>
				</div>
			</div>
		);
	} else {
		return;
	}
}

export default Modal;
