import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import DocumentationBlocks from './DocumentationBlocks/DocumentationBlocks';
import { SiteBlocks } from './SiteBlocks/SiteBlocks';
import { StyledBlocks } from './StyledBlocks';

interface IProps {
	all_sites: { image: string; site: string; title: string }[];
	selectedSites: { selected_sites: string[] };
	setSelectedSites: Dispatch<SetStateAction<{ selected_sites: string[] }>>;
	documentation_site: { image: string; site: string; title: string };
}
export const Blocks: FunctionComponent<IProps> = (props) => {
	const { all_sites, selectedSites, setSelectedSites, documentation_site } = props;
	return (
		<StyledBlocks>
			<SiteBlocks
				all_sites={all_sites}
				selectedSites={selectedSites}
				setSelectedSites={setSelectedSites}
			/>
			<DocumentationBlocks documentation_site={documentation_site} />
		</StyledBlocks>
	);
};
