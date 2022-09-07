import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { code_sites } from '../../src/assets/code_sites';
import Layout from '../../src/components/Layout';
import { Search } from '../../src/components/Search/Search';
import { SiteBlocks } from '../../src/components/SiteBlocks/SiteBlocks';
interface Props {
	slug: string;
	stringified_sites: string;
}
const CodePage: NextPage<Props> = (props) => {
	const { slug, stringified_sites } = props;
	const all_sites: { image: string; site: string }[] = JSON.parse(stringified_sites);
	const site_params = `\"${slug}\"`;

	const [selectedSites, setSelectedSites] = useState<{ selected_sites: string[] }>({
		selected_sites: ['https://stackoverflow.com'],
	});

	useEffect(() => {
		console.log(selectedSites);
	}, [selectedSites]);
	return (
		<Layout title={`PHP - ${slug}`}>
			<Search
				placeholder={`Search in ${slug}`}
				key_params={site_params}
				selectedSites={selectedSites}
			/>
			<SiteBlocks
				all_sites={all_sites}
				selectedSites={selectedSites}
				setSelectedSites={setSelectedSites}
			/>
		</Layout>
	);
};

export async function getServerSideProps(context: any) {
	const { slug } = context.params;

	const stringified_sites = JSON.stringify(
		code_sites.filter((site) => site.key === slug)[0].sites,
	);

	return {
		props: {
			slug: slug,
			stringified_sites: stringified_sites,
		},
	};
}

export default CodePage;
