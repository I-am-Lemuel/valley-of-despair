import { NextPage } from 'next';
import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import { default_sites } from '../../src/assets/code_sites';
import Layout from '../../src/components/Layout';
import { Search } from '../../src/components/Search/Search';
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

	const handleClickSite = (e: any, site: string) => {
		e.preventDefault();
		const { selected_sites } = selectedSites;
		if (selected_sites.includes(site)) {
			const new_selected_sites = selected_sites.filter((s) => s !== site);
			setSelectedSites({ selected_sites: new_selected_sites });
		} else {
			setSelectedSites({ selected_sites: [...selected_sites, site] });
		}
	};

	useEffect(() => {
		console.log(selectedSites);
	}, [selectedSites]);
	return (
		<Layout title={`PHP - ${slug}`}>
			<Search placeholder={`Search in ${slug}`} site_params={site_params} />
			<h1>Slug: {slug}</h1>
			<h1>Key params: {site_params}</h1>
			{all_sites.map((site, index) => (
				<div key={index} onClick={(e) => handleClickSite(e, site.site)}>
					<Image
						src={`/${site.image}`}
						alt={site.site}
						width={400}
						height={170}
					/>
				</div>
			))}
		</Layout>
	);
};

export async function getServerSideProps(context: any) {
	const { slug } = context.params;

	const stringified_sites = JSON.stringify(
		default_sites.filter((site) => site.key === slug)[0].sites,
	);

	return {
		props: {
			slug: slug,
			stringified_sites: stringified_sites,
		},
	};
}

export default CodePage;
