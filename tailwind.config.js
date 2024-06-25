/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [require("@tailwindcss/typography")],
	/* 	theme: {
		colors: {
			"blog-theme-primary": "#3578b5",
		},
	}, */
};
