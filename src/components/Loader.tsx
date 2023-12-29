function Loader({ textColor }: { textColor: string }) {
	return (
		<div className="py-10">
			<p className={`${textColor} text-2xl text-center`}>Loading....</p>
		</div>
	);
}

export default Loader;
