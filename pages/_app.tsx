import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../src/components/Layout';
// import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;