import { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import { Search } from '../../src/components/Search/Search';

interface Props {
	slug: string;
	default_sites: { key: string; sites: { image: string; site: string }[] }[];
}
const CodePage: NextPage<Props> = (props) => {
	const { slug, default_sites } = props;
	const site_params = `\"${slug}\"`;
	console.log(default_sites);
	return (
		<Layout title={`PHP - ${slug}`}>
			<Search placeholder={`Search in ${slug}`} site_params={site_params} />
			<h1>Slug: {slug}</h1>
			<h1>Key params: {site_params}</h1>
			{default_sites.map((site, index) => {
				if (site.key === slug) {
					return (
						<div key={index}>
							<h1>Key: {site.key}</h1>
							<h1>Sites: </h1>
						</div>
					);
				}
			})}
		</Layout>
	);
};

export async function getServerSideProps(context: any) {
	const { slug } = context.params;
	const default_sites: { key: string; sites: { image: string; site: string }[] }[] = [
		{
			key: 'css',
			sites: [
				{
					image: 'css-tricks.png',
					site: 'https://css-tricks.com',
				},
				{
					image: 'mozilla.png',
					site: 'https://developer.mozilla.org',
				},
				{
					image: 'w3.png',
					site: 'https://www.w3schools.com',
				},
				{
					image: 'css-ref.png',
					site: 'https://cssreference.io',
				},
				{
					image: 'stack-overflow.png',
					site: 'https://stackoverflow.com',
				},
				{
					image: 'reddit.png',
					site: 'https://www.reddit.com',
				},
				{
					image: 'github.png',
					site: 'https://github.com',
				},
				{
					image: 'quora.png',
					site: 'https://www.quora.com',
				},
			],
		},
		{
			key: 'js',
			sites: [
				{
					image: '',
					site: '',
				},
			],
		},
	];

	return { props: { slug, default_sites } };
}

export default CodePage;
