import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }: any) => {
	const theme = {
		colors: {
			primary: '#080708',
			secondary: '#D8735A',
			accent: '#6E2594',
			accent2: '#416440',
			background: '#FFEBFB',
		},
		fonts: {
			primary: 'Merriweather, serif',
			secondary: 'MerriweatherSans, sans-serif',
		},
		fontSizes: {
			small: '1.2rem',
			medium: '2.2rem',
			large: '3.2rem',
		},
	};
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
