import PropTypes from "prop-types";
import { OverviewCardToday } from "./OverviewCardToday";

export const OverviewTodayContainer = ({ data }) => {
	return (
		<section>
			<h2 className="max-w-[1440px] mx-auto px-7 mb-7 font-bold text-[1.57rem] text-ct-dark-grayish-blue dark:text-white">Overview - Today</h2>
			<div className="flex flex-wrap gap-5 justify-center last:mb-10 px-5">
				{data.map((item) => {
					return <OverviewCardToday key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

OverviewTodayContainer.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
