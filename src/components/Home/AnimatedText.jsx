import { useEffect, useState } from 'react';

export function AnimatedText({ 
  texts, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseDuration = 2000 
}) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentText === texts[currentIndex]) {
        // Pause before starting to delete
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
        return;
      }

      timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
      }, typingSpeed);
    } else {
      if (currentText === '') {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
        return;
      }

      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="font-mono">
      <span className="text-3xl text-[#39FF14]">{currentText}</span>
      <span className="animate-blink text-3xl text-[#39FF14]">|</span>
    </div>
  );
}