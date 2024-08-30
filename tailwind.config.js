/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				ct: {
					"lime-green": "hsl(163, 72%, 41%)",
					"bright-red": "hsl(356, 69%, 56%)",
					facebook: "hsl(208, 92%, 53%)",
					twitter: "hsl(203, 89%, 53%)",
					youtube: "hsl(348, 97%, 39%)",
					toogle: "hsl(230, 22%, 74%)",
					"very-dark-blue": "hsl(230, 17%, 14%)",
					"dark-blue-top": "hsl(232, 19%, 15%)",
					"dark-desaturated-blue": "hsl(228, 28%, 20%)",
					"desaturated-blue": "hsl(228, 34%, 66%)",
					"very-pale-blue": "hsl(225, 100%, 98%)",
					"light-grayish-blue": "hsl(227, 47%, 96%)",
					"dark-grayish-blue": "hsl(228, 12%, 44%)",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			backgroundImage: {
				"toogle-gradient": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
				instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
			},
			screens: {
				md: "708px",
				lg: "1404px",
			},
		},
	},
	plugins: [],
};
