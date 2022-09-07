import { NextPage } from 'next';
import Layout from '../../src/components/Layout';
import { Search } from '../../src/components/Search/Search';

interface Props {
	slug: string;
	default_sites: { key: string; sites: {} }[];
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
	let default_sites: { key: string; sites: {} }[] = [
		{
			key: 'css',
			sites: [
				{
					image: 'w3.png',
					site: 'https://css-tricks.com',
				},
				{
					image: 'w3.png',
					site: 'https://developer.mozilla.org',
				},
				{
					site: 'https://www.w3schools.com',
				},
				{
					site: 'https://cssreference.io',
				},
				{
					site: 'https://stackoverflow.com',
				},
				{
					site: 'https://www.reddit.com',
				},
				{
					site: 'https://github.com',
				},
				{
					site: 'https://www.quora.com',
				},
			],
		},
		{
			key: 'js',
			sites: {},
		},
	];

	return { props: { slug, default_sites } };
}

export default CodePage;
