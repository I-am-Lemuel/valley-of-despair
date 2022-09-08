import { NextPage } from "next";
import { useState } from "react";
import { code_sites } from "../../src/assets/code_sites";
import { Blocks } from "../../src/components/Blocks/Blocks";
import Layout from "../../src/components/Layout";
import { Search } from "../../src/components/Search/Search";
interface Props {
  slug: string;
  stringified_sites: string;
  stringified_documentation_site: string;
}
const CodePage: NextPage<Props> = (props) => {
  const { slug, stringified_sites, stringified_documentation_site } = props;
  const all_sites: {
    image: string;
    site: string;
    title: string;
    default?: boolean;
  }[] = JSON.parse(stringified_sites);
  const documentation_site: { image: string; site: string; title: string } =
    JSON.parse(stringified_documentation_site);
  const site_params = `\"${slug}\"`;

  const [selectedSites, setSelectedSites] = useState<{
    selected_sites: string[];
  }>({
    selected_sites: all_sites
      .filter((site) => site.default)
      .map((site) => site.site),
  });
  return (
    <Layout title={`PHP - ${slug}`}>
      <Search
        placeholder={`Search in ${slug}`}
        key_params={site_params}
        selectedSites={selectedSites}
      />
      <Blocks
        documentation_site={documentation_site}
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
    code_sites.filter((site) => site.key === slug)[0].sites
  );

  const stringified_documentation_site = JSON.stringify(
    code_sites.filter((site) => site.key === slug)[0].documentation_site
  );

  return {
    props: {
      slug: slug,
      stringified_sites: stringified_sites,
      stringified_documentation_site: stringified_documentation_site,
    },
  };
}

export default CodePage;
