import { useRouter } from 'next/router';

const Search = () => {
	const router = useRouter();

	return (
		<>
			<h1>Query: {router.query.query}</h1>
		</>
	);
};

export default Search;
