import { useState, useEffect } from "react";

export function useTypewriter(words: string[], pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = words[wordIndex];

    let timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setText(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        if (!isDeleting && charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [words, wordIndex, charIndex, isDeleting, pause]);

  return text;
}
