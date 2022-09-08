import Image from "next/future/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { StyledCard, StyledLanguageBlocks } from "./StyledLanguageBlocks";
interface IProps {
  cards: { image: string; link: string }[];
}
export const LanguageBlocks: FunctionComponent<IProps> = (props) => {
  const { cards } = props;
  return (
    <StyledLanguageBlocks>
      {cards.map((card, key) => {
        return (
          <StyledCard key={key}>
            <Link href={`/code/${card.link}`} passHref>
              <a>
                <Image
                  src={`/${card.image}`}
                  alt={card.link}
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </StyledCard>
        );
      })}
    </StyledLanguageBlocks>
  );
};
