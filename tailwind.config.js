/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#3b82f6",

					secondary: "#ffffff",

					accent: "#1d4ed8",

					neutral: "#191D24",

					"base-100": "#ffffff",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	theme: {
		extend: {
			fontFamily: {
				ssanspro: ["'Source Sans Pro', sans-serif"],
			},
			spacing: {
				128: "32rem",
				115: "28rem",
			},
		},
	},
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		require("daisyui"),
		require("@tailwindcss/line-clamp"),
	],
};
