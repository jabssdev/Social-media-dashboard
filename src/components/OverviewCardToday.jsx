import PropTypes from "prop-types";

import { convertToK } from "../utils/convertToK";
import { useSocialMediaStyles } from "../hooks/useSocialMediaStyles";

import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export const OverviewCardToday = ({ socialNetwork, typeAudience, amountAudience, todayAudience, goUp }) => {
	const { icon } = useSocialMediaStyles(socialNetwork);

	return (
		<article className="bg-ct-light-grayish-blue w-80 pt-7 pb-4 px-7 rounded-[5px] dark:bg-ct-dark-desaturated-blue hover:brightness-95 cursor-pointer transition-all dark:hover:brightness-125">
			<div className="flex items-center justify-between mb-5">
				<p className="font-bold text-sm text-ct-dark-grayish-blue dark:text-ct-desaturated-blue">{typeAudience}</p>
				<img src={icon} alt={`${socialNetwork} Icon`} />
			</div>
			<div className="flex justify-between">
				<p className="text-ct-very-dark-blue font-[600] text-[2.05rem] dark:text-white">{convertToK(amountAudience)}</p>
				<div className="flex items-center justify-center gap-1 mt-3.5">
					<img src={goUp ? upIcon : downIcon} alt={`${goUp ? "Increase" : "Decrease"} followers icon`} />
					<p className={`text-xs font-bold ${goUp ? "text-ct-lime-green" : "text-ct-bright-red"}`}>{todayAudience}%</p>
				</div>
			</div>
		</article>
	);
};

OverviewCardToday.propTypes = {
	socialNetwork: PropTypes.string.isRequired,
	typeAudience: PropTypes.string.isRequired,
	amountAudience: PropTypes.number.isRequired,
	todayAudience: PropTypes.number.isRequired,
	goUp: PropTypes.bool.isRequired,
};
