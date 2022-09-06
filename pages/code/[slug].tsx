import { useRouter } from 'next/router';

export default function CodePage() {
	const router = useRouter();
	console.log(router.query.slug);

	return (
		<>
			<h1>Slug: {router.query.slug}</h1>
		</>
	);
}
