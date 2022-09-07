import { LanguageBlocks } from '../src/components/LanguageBlocks/LanguageBlocks';
import Layout from '../src/components/Layout';
import { Search } from '../src/components/Search/Search';
import { StyledHome } from '../src/styles/StyledHome';

const Home = () => {
	return (
		<Layout title='PHP - Home'>
			<StyledHome>
				<Search />
				<LanguageBlocks />
			</StyledHome>
		</Layout>
	);
};

export default Home;
