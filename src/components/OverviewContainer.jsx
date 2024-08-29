import data from "../data/data.json";
import { OverviewCard } from "./OverviewCard";

const { overview, overviewToday } = data;

export const OverviewContainer = () => {
	return (
		<section className=" w-80 absolute top-48 left-0 right-0 mx-auto">
			{overview.map((item) => {
				return <OverviewCard key={item.id} {...item} />;
			})}
		</section>
	);
};
