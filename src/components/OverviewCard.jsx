import PropTypes from "prop-types";

import { useSocialMediaStyles } from "../hooks/useSocialMediaStyles";
import { convertToK } from "../utils/convertToK";

import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export const OverviewCard = ({ socialNetwork, user, typeAudience, amountAudience, todayAudience, goUp }) => {
	const { icon, borderBackground } = useSocialMediaStyles(socialNetwork);

	return (
		<article
			className={
				"bg-ct-light-grayish-blue w-full h-56 mb-6 rounded-[5px] overflow-hidden text-center dark:bg-ct-dark-desaturated-blue hover:brightness-95 cursor-pointer transition-all dark:hover:brightness-125"
			}
		>
			<div className={`${borderBackground} h-[0.28rem] mb-7`}></div>
			<div className="flex items-center justify-center gap-2.5 mb-6">
				<img src={icon} alt={`${socialNetwork} Icon`} />
				<h2 className="text-ct-dark-grayish-blue text-xs font-bold dark:text-ct-desaturated-blue">{user}</h2>
			</div>
			<p className="text-ct-very-dark-blue font-bold text-6xl mb-1 dark:text-white">{convertToK(amountAudience)}</p>
			<p className="text-ct-dark-grayish-blue text-xs uppercase tracking-[0.37rem] mb-5 dark:text-ct-desaturated-blue">{typeAudience}</p>
			<div className="flex items-center justify-center gap-2">
				<img src={goUp ? upIcon : downIcon} alt={`${goUp ? "Increase" : "Decrease"} followers icon`} />
				<p className={`text-xs font-bold ${goUp ? "text-ct-lime-green" : "text-ct-bright-red"}`}>{todayAudience} Today</p>
			</div>
		</article>
	);
};

OverviewCard.propTypes = {
	socialNetwork: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
	typeAudience: PropTypes.string.isRequired,
	amountAudience: PropTypes.number.isRequired,
	todayAudience: PropTypes.number.isRequired,
	goUp: PropTypes.bool.isRequired,
};
