import Image from 'next/future/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { StyledCard, StyledLanguageBlocks } from './StyledLanguageBlocks';
interface IProps {}
export const LanguageBlocks: FunctionComponent<IProps> = (props) => {
	const cards = [
		{
			icon: 'css.png',
			name: 'css',
		},
		{
			icon: 'html.png',
			name: 'html',
		},
		{
			icon: 'js.png',
			name: 'js',
		},
		{
			icon: 'python.png',
			name: 'python',
		},
		{
			icon: 'c.png',
			name: 'c',
		},
		{
			icon: 'php.png',
			name: 'php',
		},
	];
	return (
		<StyledLanguageBlocks>
			{cards.map((card) => {
				return (
					<StyledCard>
						<Link href={`/code/${card.name}`}>
							<Image
								src={`/${card.icon}`}
								alt={card.name}
								width={100}
								height={100}
							/>
						</Link>
					</StyledCard>
				);
			})}
		</StyledLanguageBlocks>
	);
};
