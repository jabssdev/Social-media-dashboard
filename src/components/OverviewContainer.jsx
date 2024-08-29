import PropTypes from "prop-types";
import { OverviewCard } from "./OverviewCard";

export const OverviewContainer = ({ data }) => {
	const { overview } = data;

	return (
		<section className="w-80 absolute top-48 left-0 right-0 mx-auto">
			{overview.map((item) => {
				return <OverviewCard key={item.id} {...item} />;
			})}
		</section>
	);
};

OverviewContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
