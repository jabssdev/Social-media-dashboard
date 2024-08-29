import PropTypes from "prop-types";
import { OverviewCardToday } from "./OverviewCardToday";

export const OverviewTodayContainer = ({ data }) => {
	const { overviewToday } = data;

	return (
		<section className="max-w-screen-xl flex flex-wrap mx-auto last:mb-10">
			<h2 className="mb-7 font-bold text-[1.57rem] text-ct-dark-grayish-blue dark:text-white">Overview - Today</h2>
			{overviewToday.map((item) => {
				return <OverviewCardToday key={item.id} {...item} />;
			})}
		</section>
	);
};

OverviewTodayContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
