import { useMemo } from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";

export const useSocialMediaStyles = (socialNetwork) => {
	const icons = useMemo(
		() => ({
			facebook: facebookIcon,
			twitter: twitterIcon,
			instagram: instagramIcon,
			youtube: youtubeIcon,
		}),
		[]
	);

	const borderBackgrounds = useMemo(
		() => ({
			facebook: "bg-ct-facebook",
			twitter: "bg-ct-twitter",
			instagram: "bg-instagram",
			youtube: "bg-ct-youtube",
		}),
		[]
	);

	return {
		icon: icons[socialNetwork] || null,
		borderBackground: borderBackgrounds[socialNetwork] || null,
	};
};
