import { useRouter } from 'next/router';
import { Search } from '../../src/components/Search/Search';

export default function CodePage() {
	const router = useRouter();
	console.log(router.query.slug);

	return (
		<>
			<Search placeholder={`Search in ${router.query.slug}`} />
			<h1>Slug: {router.query.slug}</h1>
		</>
	);
}
