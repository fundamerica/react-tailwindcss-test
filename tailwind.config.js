module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: 'var(--color-blue)',
				green: '#3dc578',
				stone: '#102A43',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
