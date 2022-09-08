import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { StyledDocumentationBlocks } from "./StyledDocumentationBlocks";

interface IProps {
  documentation_site: { image: string; site: string; title: string };
}

const DocumentationBlocks: FunctionComponent<IProps> = (props) => {
  const { documentation_site } = props;
  return (
    <StyledDocumentationBlocks>
      <Link href={documentation_site.site} passHref>
        <a>
          <Image
            src={`/${documentation_site.image}`}
            alt={documentation_site.title}
            width={70}
            height={70}
          />
          <p>{documentation_site.title}</p>
        </a>
      </Link>
    </StyledDocumentationBlocks>
  );
};

export default DocumentationBlocks;
