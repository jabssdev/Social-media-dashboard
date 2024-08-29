import data from "./data/data.json";

import { Header } from "./components/Header";
import { OverviewContainer } from "./components/OverviewContainer";
import { OverviewTodayContainer } from "./components/OverviewTodayContainer";

export const App = () => {
	return (
		<>
			<Header />
			<OverviewContainer data={data} />
			<h2 className="w-80 mx-auto mb-7 font-bold text-[1.57rem] text-ct-dark-grayish-blue dark:text-white">Overview - Today</h2>
			<OverviewTodayContainer data={data} />
		</>
	);
};
