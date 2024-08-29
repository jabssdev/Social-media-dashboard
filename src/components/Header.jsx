export const Header = () => {
	const handleClickTheme = () => {
		document.documentElement.classList.toggle("dark");
	};

	return (
		<header className="bg-ct-very-pale-blue dark:bg-ct-dark-blue-top h-60 p-5 rounded-b-3xl mb-[965px]">
			<h1 className="text-ct-very-dark-blue dark:text-ct-very-pale-blue font-bold text-2xl mt-3 leading-9">Social Media Dashboard</h1>
			<p className="font-bold text-sm text-ct-dark-grayish-blue dark:text-ct-desaturated-blue">Total Followers: 23,004</p>
			<hr className="my-5 border-ct-dark-grayish-blue dark:border-ct-desaturated-blue" />
			<div className="flex justify-between">
				<p className="text-sm font-bold text-ct-dark-grayish-blue dark:text-ct-desaturated-blue">Dark Mode</p>
				<label className=" bg-ct-toogle w-[46px] h-6 rounded-full overflow-hidden cursor-pointer p-[4px] relative" htmlFor="toogle-theme">
					<input className="peer sr-only" type="checkbox" id="toogle-theme" onClick={handleClickTheme} />
					<div className="w-full h-full peer-checked:bg-toogle-gradient absolute top-0 left-0"></div>
					<div className="w-4 h-4 bg-white dark:bg-ct-dark-blue-top rounded-full peer-checked:translate-x-[-23px] transition-all absolute right-1"></div>
				</label>
			</div>
		</header>
	);
};
