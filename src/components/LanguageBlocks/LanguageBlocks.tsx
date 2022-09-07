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
			{cards.map((card, key) => {
				return (
					<StyledCard key={key}>
						<Link href={`/code/${card.name}`} passHref>
							<a>
								<Image
									src={`/${card.icon}`}
									alt={card.name}
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
