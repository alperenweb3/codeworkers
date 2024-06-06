'use client';
import { useEffect, useState, useRef } from 'react';
import styles from '@/app/ui/home.module.css';


const TextSwap: React.FC = () => {
  const [text, setText] = useState<string>("made by");
  const texts: string[] = ["made by", "made for"];
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const changingTextElement = document.getElementById("changingText");
      if (changingTextElement) {
        changingTextElement.classList.remove("opacity-100");
        changingTextElement.classList.add("opacity-0");

        setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % texts.length;
          setText(texts[indexRef.current]);
          changingTextElement.classList.remove("opacity-0");
          changingTextElement.classList.add("opacity-100");
        }, 500); // Duration of the fade-out transition
      }
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={`${styles.fade} opacity-100`} id="changingText">{text}</span>
  );
};

export default TextSwap;
