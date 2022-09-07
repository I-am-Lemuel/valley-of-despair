import { LanguageBlocks } from '../src/components/LanguageBlocks/LanguageBlocks';
import Layout from '../src/components/Layout';
import { Search } from '../src/components/Search/Search';
import { StyledHome } from '../src/styles/StyledHome';

const Home = () => {
	const cards = [
		{
			image: 'css.png',
			link: 'css',
		},
		{
			image: 'html.png',
			link: 'html',
		},
		{
			image: 'js.png',
			link: 'js',
		},
		{
			image: 'python.png',
			link: 'python',
		},
		{
			image: 'c.png',
			link: 'c',
		},
		{
			image: 'php.png',
			link: 'php',
		},
	];

	return (
		<Layout title='PHP - Home'>
			<StyledHome>
				<Search />
				<LanguageBlocks cards={cards} />
			</StyledHome>
		</Layout>
	);
};

export default Home;
