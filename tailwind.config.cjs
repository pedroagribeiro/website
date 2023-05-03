/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#121212',
				secondary: '#696969',
				terciary: '#1E1E1E'
			},
			fontFamily: {
				sans: ["Lexend", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
