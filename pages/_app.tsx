import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import GlobalStyle from '../src/styles/GlobalStyles';
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<GlobalStyle />
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Component {...pageProps} />
		</Theme>
	);
}

const Theme = ({ children }: any) => {
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

export default MyApp;
