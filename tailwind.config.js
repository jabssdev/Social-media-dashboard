/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"lime-green": "hsl(163, 72%, 41%)",
					"bright-red": "hsl(356, 69%, 56%)",
					facebook: "hsl(208, 92%, 53%)",
					twitter: "hsl(203, 89%, 53%)",
					youtube: "hsl(348, 97%, 39%)",
				},
				dt: {
					toogle: "hsl(230, 22%, 74%)",
					"very-dark-blue": "hsl(230, 17%, 14%)",
					"dark-blue-top": "hsl(232, 19%, 15%)",
					"dark-desaturated-blue": "hsl(228, 28%, 20%)",
					"desaturated-blue": "hsl(228, 34%, 66%)",
				},
				lt: {
					"very-pale-blue": "hsl(225, 100%, 98%)",
					"light-grayish-blue": "hsl(227, 47%, 96%)",
					"dark-grayish-blue": "hsl(228, 12%, 44%)",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
