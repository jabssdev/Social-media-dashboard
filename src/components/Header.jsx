export const Header = () => {
	return (
		<header className="bg-lt-very-pale-blue h-56 p-5 rounded-b-3xl">
			<h1 className="text-dt-very-dark-blue font-bold text-2xl mt-3 leading-9">Social Media Dashboard</h1>
			<p className="font-bold text-sm text-lt-dark-grayish-blue">Total Followers: 23,004</p>
			<hr className="my-5 border-lt-dark-grayish-blue" />
			<div className="flex justify-between">
				<p className="text-sm font-bold text-lt-dark-grayish-blue">Dark Mode</p>
				<label className="border bg-dt-toogle w-11 h-6 rounded-full overflow-hidden cursor-pointer p-[3px] relative" htmlFor="toogle-theme">
					<input className="peer sr-only" type="checkbox" id="toogle-theme" />
					<div className="w-full h-full peer-checked:bg-toogle absolute top-0 left-0"></div>
					<div className="w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
				</label>
			</div>
		</header>
	);
};
