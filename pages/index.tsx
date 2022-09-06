import { LanguageBlocks } from '../src/components/LanguageBlocks/LanguageBlocks';
import { Search } from '../src/components/Search/Search';
import { StyledHome } from '../src/styles/StyledHome';

const Home = () => {
	return (
		<StyledHome>
			<Search />
			<LanguageBlocks />
		</StyledHome>
	);
};

export default Home;
