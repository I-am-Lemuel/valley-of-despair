import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { StyledLogo, StyledSearch } from './StyledSearch';
interface IProps {
	placeholder?: string;
	key_params?: string;
	selectedSites?: { selected_sites: string[] };
}
export const Search: FunctionComponent<IProps> = (props) => {
	const { placeholder, key_params, selectedSites } = props;
	const [search, setSearch] = useState('');
	const router = useRouter();

	const onChange = (e: any) => {
		setSearch(e.target.value);
	};
	const onSearch = (e: any) => {
		e.preventDefault();
		const query =
			search +
			(key_params ? ` ${key_params}` : '') +
			(selectedSites ? ` site:${selectedSites.selected_sites.join(' OR ')}` : '');
		router.push(`https://www.google.com/search?q=${query}`);
	};
	return (
		<StyledSearch>
			<StyledLogo>
				<Link href='/' passHref>
					<a>
						<Image src='/logo.svg' alt='Logo' width={300} height={130} />
					</a>
				</Link>
			</StyledLogo>
			<div>
				<button onClick={(e) => onSearch(e)}>
					<BsSearch />
				</button>
				<input
					type='text'
					placeholder={placeholder ? placeholder : 'Search'}
					onChange={(e) => onChange(e)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onChange(e);
							onSearch(e);
						}
					}}></input>
			</div>
		</StyledSearch>
	);
};
