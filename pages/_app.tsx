import { AppProps } from 'next/app';
import Head from 'next/head';
import { Theme } from '../src/components/Theme/Theme';
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

export default MyApp;
