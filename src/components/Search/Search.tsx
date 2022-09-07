import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { StyledLogo, StyledSearch } from './StyledSearch';
interface IProps {
	placeholder?: string;
}
export const Search: FunctionComponent<IProps> = (props) => {
	const { placeholder } = props;
	const [search, setSearch] = useState('');
	const router = useRouter();

	const onChange = (e: any) => {
		setSearch(e.target.value);
	};
	const onSearch = (e: any) => {
		e.preventDefault();
		console.log(search);
		router.push(`/search/${search}`);
	};
	return (
		<StyledSearch>
			<StyledLogo>
					<a href='/'>
						<Image src='/logo.svg' alt='Logo' width={300} height={130} />
					</a>
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
