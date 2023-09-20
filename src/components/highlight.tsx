import { ReactNode, useState } from 'react';
import styles from './highlight.module.css';

interface HighlightProps {
    text: string;
    searchText: string[];
}

export const Highlight = (props: HighlightProps) => {
    const { text, searchText } = props;
    const [highlightedText, setHighlightedText] = useState<(string | ReactNode)[]>('');

    const createRegex = () => {
        const searchTextRegex = searchText.map(word => `\\b${word}\\b`).join('|');
        return new RegExp(`(${searchTextRegex})`, 'gi');
    };

    const handleScanClick = () => {
        const parts = text.split(createRegex());
        const highlightedParts = parts.map((part, index) => {
            const isHighlighted = searchText.includes(part.toLowerCase());
            return isHighlighted ? (
                <b key={index} className={styles.highlight}>
                    {part}
                </b>
            ) : (
                part
            );
        });

        setHighlightedText(highlightedParts);
    };

    return (
        <div>
            <button onClick={handleScanClick}>Scan</button>
            <div>{highlightedText && <div>{highlightedText}</div>}</div>
        </div>
    );
};
