import { CapsuleType, CapStatus, CapTypes } from "../types";

function Search({
	setCaps,
	search,
	setSearch,
}: {
	setCaps: React.Dispatch<Event>;
	search: string;
	setSearch: (x: string) => React.Dispatch<Event>;
}) {
	async function getCaps() {
		const req = await fetch("https://api.spacexdata.com/v3/capsules");
		const res = await req.json();
		return res;
	}
	async function handleStatus(e: string) {
		if (e === CapStatus.Active) {
			const capsules = await getCaps();
			const activeCaps = capsules.filter(
				(cap: CapsuleType) => cap.status === CapStatus.Active
			);
			setCaps(activeCaps);
		} else if (e === CapStatus.Retired) {
			const capsules = await getCaps();
			const retiredCaps = capsules.filter(
				(cap: CapsuleType) => cap.status === CapStatus.Retired
			);
			setCaps(retiredCaps);
		} else if (e === CapStatus.Unknown) {
			const capsules = await getCaps();
			const unknownCaps = capsules.filter(
				(cap: CapsuleType) => cap.status === CapStatus.Unknown
			);
			setCaps(unknownCaps);
		} else if (e === CapStatus.All) {
			const capsules = await getCaps();
			setCaps(capsules);
		} else {
			return;
		}
	}

	async function handleType(e: string) {
		if (e === CapTypes.DR10) {
			const capsules = await getCaps();
			const oneCaps = capsules.filter(
				(cap: CapsuleType) => cap.type === CapTypes.DR10
			);
			setCaps(oneCaps);
		} else if (e === CapTypes.DR11) {
			const capsules = await getCaps();
			const oneOOneCaps = capsules.filter(
				(cap: CapsuleType) => cap.type === CapTypes.DR11
			);
			setCaps(oneOOneCaps);
		} else if (e === CapTypes.DR20) {
			const capsules = await getCaps();
			const twoCaps = capsules.filter(
				(cap: CapsuleType) => cap.type === CapTypes.DR20
			);
			setCaps(twoCaps);
		} else if (e === CapTypes.All) {
			const capsules = await getCaps();
			setCaps(capsules);
		} else {
			return;
		}
	}

	async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		const term = String(e.target.value).toUpperCase();
		setSearch(term);
		const capsules = await getCaps();
		const searchedCaps = capsules.filter(
			(cap: CapsuleType) => cap.capsule_serial === search
		);
		search ? setCaps(searchedCaps) : setCaps(capsules);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const term = String(e.target.value).toUpperCase();
		setSearch(term);
	}

	return (
		<div className="py-5 mb-12">
			<div className="w-10/12 mx-auto">
				<form
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					onSubmit={handleSubmit}
					className="flex flex-col md:flex-row gap-5"
				>
					<input
						className="text-black py-3 px-5 md:w-4/12 font-geist"
						type="text"
						name="search"
						placeholder="Capsule serial eg C101"
						onChange={handleChange}
					/>
					<select
						className="text-black py-3 px-5 md:w-4/12 font-geist"
						name="status"
						id="status"
						onChange={(e) => handleStatus(e.target.value)}
					>
						<option value="all">All</option>
						<option value="active">Active</option>
						<option value="retired">Retired</option>
						<option value="unknown">Unknown</option>
					</select>
					<select
						className="text-black py-3 px-5 md:w-4/12 font-geist"
						name="type"
						id="type"
						onChange={(e) => handleType(e.target.value)}
					>
						<option value="All">All</option>
						<option value="Dragon 1.0">Dragon 1.0</option>
						<option value="Dragon 1.1">Dragon 1.1</option>
						<option value="Dragon 2.0">Dragon 2.0</option>
					</select>
					<button className="text-black bg-white py-3 px-5 font-geist transition-scale duration-500 hover:scale-105">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}

export default Search;
