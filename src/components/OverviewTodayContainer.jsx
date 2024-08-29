import PropTypes from "prop-types";
import { OverviewCardToday } from "./OverviewCardToday";

export const OverviewTodayContainer = ({ data }) => {
	const { overviewToday } = data;

	return (
		<section className="max-w-[1440px] mx-auto">
			<h2 className="w-80 mb-7 font-bold sm:ml-[52px] ml-7 text-[1.57rem] text-ct-dark-grayish-blue dark:text-white">Overview - Today</h2>
			<div className="max-w-[1440px] flex flex-wrap gap-5 justify-center last:mb-10">
				{overviewToday.map((item) => {
					return <OverviewCardToday key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

OverviewTodayContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
