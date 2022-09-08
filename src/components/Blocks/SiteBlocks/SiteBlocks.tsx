import Image from "next/future/image";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import {
  StyledSiteBlocks,
  StyledSiteBtn,
  StyledSiteTitle,
} from "./StyledSiteBlocks";
interface IProps {
  all_sites: { image: string; site: string; title: string }[];
  selectedSites: { selected_sites: string[] };
  setSelectedSites: Dispatch<SetStateAction<{ selected_sites: string[] }>>;
}
export const SiteBlocks: FunctionComponent<IProps> = (props) => {
  const { all_sites, selectedSites, setSelectedSites } = props;

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
  return (
    <>
      <StyledSiteTitle>Search in:</StyledSiteTitle>
      <StyledSiteBlocks>
        {all_sites.map((site, index) => (
          <StyledSiteBtn
            onClick={(e) => handleClickSite(e, site.site)}
            key={index}
            selected={selectedSites.selected_sites.includes(site.site)}
          >
            <p>{site.title}</p>
            <Image
              src={`/${site.image}`}
              alt={site.site}
              width={65}
              height={65}
            />
          </StyledSiteBtn>
        ))}
      </StyledSiteBlocks>
    </>
  );
};
