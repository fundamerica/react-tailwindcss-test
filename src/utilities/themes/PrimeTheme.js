import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		powderWhite: '#FFFDF9',
		primeGreen: `#3dc578`,
		primeBlue: 'var(--color-blue)',
		stone: '#102A43',
	},
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
};

export const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
