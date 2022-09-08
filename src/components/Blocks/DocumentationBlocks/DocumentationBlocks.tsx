import { FunctionComponent } from "react";
import { StyledDocumentationBlocks } from "./StyledDocumentationBlocks";

interface IProps {
  documentation_site: { image: string; site: string; title: string };
}

const DocumentationBlocks: FunctionComponent<IProps> = (props) => {
  const { documentation_site } = props;
  return (
    <StyledDocumentationBlocks>
      <p>{documentation_site.site}</p>
    </StyledDocumentationBlocks>
  );
};

export default DocumentationBlocks;
