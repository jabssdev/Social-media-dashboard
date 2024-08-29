export const convertToK = (number) => {
	if (number >= 10000) {
		return `${number / 1000}k`;
	}
	return number;
};
