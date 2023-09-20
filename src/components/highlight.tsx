import React, { ReactNode, useState } from 'react';
import styles from './highlight.module.css';

interface HighlightProps {
    searchText: string[];
}

export const Highlight = (props: HighlightProps) => {
    const { searchText } = props;
    const [inputText, setInputText] = useState<string>('');
    const [highlightedText, setHighlightedText] = useState<(string | ReactNode)[]>('');
    const editableDivRef = React.useRef<HTMLDivElement>(null);
    const textToShow = highlightedText.length > 0 ? highlightedText : inputText;

    const createRegex = () => {
        const searchTextRegex = searchText.map(word => `\\b${word}\\b`).join('|');
        return new RegExp(`(${searchTextRegex})`, 'gi');
    };

    const highlightAndSet = (text: string) => {
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

    const handleScanClick = () => {
        if (!editableDivRef.current) return;
        const editedText = editableDivRef.current.innerText;
        console.log(editedText);
        setInputText(editedText);
        highlightAndSet(editedText);
    };

    return (
        <div>
            <div contentEditable="true" className={styles.text} ref={editableDivRef}>
                {textToShow}
            </div>
            <button onClick={handleScanClick}>Scan</button>
        </div>
    );
};
