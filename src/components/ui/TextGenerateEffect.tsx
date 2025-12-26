import React, { useEffect, useState } from "react";

interface Props {
  words: string;
  as?: "h1" | "h2";
}

export function TextGenerateEffect({ words, as = "h1" }: Props) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const Tag = as;

  useEffect(() => {
    const wordsArray = words.split(" ");
    console.log('Starting animation with words:', wordsArray);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < wordsArray.length) {
        const wordToAdd = wordsArray[currentIndex];
        console.log(`Adding word ${currentIndex}: "${wordToAdd}"`);
        setDisplayedWords((prev) => [...prev, wordToAdd]);
        currentIndex++;
      } else {
        console.log('Animation complete!');
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      setDisplayedWords([]);
    };
  }, [words]);

  return (
    <Tag className="text-3xl md:text-5xl font-extrabold tracking-tight text-emerald-50">
      {displayedWords.map((word, index) => (
        <React.Fragment key={`word-${index}`}>
          <span
            className="inline-block opacity-0"
            style={{
              animation: 'smoothFadeIn 0.8s ease-out forwards',
              animationDelay: `${index * 0.15}s`
            }}
          >
            {word}
          </span>
          {index < displayedWords.length - 1 && " "}
        </React.Fragment>
      ))}
      <style>{`
        @keyframes smoothFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </Tag>
  );
}