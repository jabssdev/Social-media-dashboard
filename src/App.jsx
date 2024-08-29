import data from "./data/data.json";

import { Header } from "./components/Header";
import { OverviewContainer } from "./components/OverviewContainer";
import { OverviewTodayContainer } from "./components/OverviewTodayContainer";

export const App = () => {
	return (
		<>
			<Header />
			<OverviewContainer data={data} />
			<OverviewTodayContainer data={data} />
		</>
	);
};
