import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

interface ScrambleItem {
  text: string;
  ref: RefObject<HTMLElement | null>;
  delay?: number;
}

interface UseScrambleTextOptions {
  start: boolean;
  items: ScrambleItem[];
  totalDuration?: number;
  characters?: string;
  randomClassName?: string;
  finalClassName?: string;
}

export const useScrambleText = ({
  start,
  items,
  totalDuration = 1.5,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  randomClassName = "text-[#F4C95D]",
  finalClassName = "text-white",
}: UseScrambleTextOptions) => {
  useLayoutEffect(() => {
    if (!start) return;

    const timelines: gsap.core.Timeline[] = [];

    items.forEach(({ text, ref, delay = 0 }) => {
      const element = ref.current;

      if (!element) return;

      const words = text.split(" ");

      if (!words.length) return;

      const timeline = gsap.timeline({
        delay,
      });

      const wordDuration = totalDuration / words.length;

      words.forEach((word, wordIndex) => {
        const state = {
          progress: 0,
        };

        timeline.to(state, {
          progress: 1,
          duration: wordDuration,
          ease: "none",

          onStart: () => {
            renderText({
              element,
              words,
              activeWordIndex: wordIndex,
              progress: 0,
              characters,
              randomClassName,
              finalClassName,
            });
          },

          onUpdate: () => {
            renderText({
              element,
              words,
              activeWordIndex: wordIndex,
              progress: state.progress,
              characters,
              randomClassName,
              finalClassName,
            });
          },

          onComplete: () => {
            renderText({
              element,
              words,
              activeWordIndex: wordIndex + 1,
              progress: 1,
              characters,
              randomClassName,
              finalClassName,
            });
          },
        });
      });

      timelines.push(timeline);
    });

    return () => {
      timelines.forEach((timeline) => timeline.kill());
    };
  }, [start, items, totalDuration, characters, randomClassName, finalClassName]);
};

interface RenderTextParams {
  element: HTMLElement;
  words: string[];
  activeWordIndex: number;
  progress: number;
  characters: string;
  randomClassName: string;
  finalClassName: string;
}

const renderText = ({
  element,
  words,
  activeWordIndex,
  progress,
  characters,
  randomClassName,
  finalClassName,
}: RenderTextParams) => {
  const renderedWords = words.map((word, index) => {
    if (index < activeWordIndex) {
      return `<span class="${finalClassName}">${word}</span>`;
    }

    if (index === activeWordIndex) {
      const revealedCharacters = Math.floor(progress * word.length);

      const scrambledWord = word
        .split("")
        .map((char, charIndex) => {
          if (charIndex < revealedCharacters) {
            return char;
          }

          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      return `<span class="${randomClassName}">${scrambledWord}</span>`;
    }

    return "";
  });

  element.innerHTML = renderedWords.join(" ").trim();
};
