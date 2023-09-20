import { Highlight } from './highlight.tsx';

const Text = () => {
    const wordList = ['word1', 'word2', 'word3'];

    return (
        <div>
            <Highlight searchText={wordList} />
        </div>
    );
};

export default Text;
