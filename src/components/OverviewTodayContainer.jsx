import PropTypes from "prop-types";
import { OverviewCardToday } from "./OverviewCardToday";

export const OverviewTodayContainer = ({ data }) => {
	const { overviewToday } = data;

	return (
		<section className="w-80 mx-auto last:mb-10">
			{overviewToday.map((item) => {
				return <OverviewCardToday key={item.id} {...item} />;
			})}
		</section>
	);
};

OverviewTodayContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
