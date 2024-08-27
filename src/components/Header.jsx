export const Header = () => {
	return (
		<header className="bg-lt-very-pale-blue h-56 p-5 rounded-b-3xl">
			<h1 className="text-dt-very-dark-blue font-bold text-2xl mt-3 leading-9">Social Media Dashboard</h1>
			<p className="font-bold text-sm text-lt-dark-grayish-blue">Total Followers: 23,004</p>
			<hr className="my-5 border-lt-dark-grayish-blue" />
			<div className="flex justify-between">
				<p className="text-sm font-bold text-lt-dark-grayish-blue">Dark Mode</p>
				<input type="checkbox" name="" id="" />
			</div>
		</header>
	);
};
