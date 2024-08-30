import PropTypes from "prop-types";
import { OverviewCard } from "./OverviewCard";

export const OverviewContainer = ({ data }) => {
	const { overview } = data;

	return (
		<section className="max-w-[1440px] absolute top-48 left-0 right-0 mx-auto flex flex-wrap gap-7 justify-center px-5">
			{overview.map((item) => {
				return <OverviewCard key={item.id} {...item} />;
			})}
		</section>
	);
};

OverviewContainer.propTypes = {
	data: PropTypes.object.isRequired,
};
