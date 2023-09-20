import React from 'react';
import styles from './text.module.css';
import { Highlight } from './highlight.tsx';

const Text = () => {
    const [inputText, setInputText] = React.useState('');

    const wordList = ['word1', 'word2', 'word3'];

    const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setInputText(event.target.value);
    };

    // Function to scan and highlight words

    return (
        <div>
            <textarea
                className={styles.text}
                value={inputText}
                onChange={handleInputChange}
                placeholder="Paste your text here..."
            ></textarea>
            <Highlight text={inputText} searchText={wordList} />
            {/*<button onClick={scanAndHighlight}>Scan</button>*/}
        </div>
    );
};

export default Text;
