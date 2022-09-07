import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { StyledSearch } from './StyledSearch';
interface IProps {}
export const Search: FunctionComponent<IProps> = (props) => {
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
			<div>
			<input type="text" placeholder='Search'
				onChange={(e) => onChange(e)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onChange(e);
						onSearch(e);
					}
				}}></input>
			<button onClick={(e) => onSearch(e)}>
				<BsSearch />
			</button>
			</div>
		</StyledSearch>
	);
};
