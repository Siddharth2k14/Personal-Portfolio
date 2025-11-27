import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function AnimatedText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeedState(deletingSpeed);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeedState(typingSpeed);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeedState);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

  return (
    <div className="h-20 flex items-center justify-center md:justify-start">
      <motion.span
        className="font-mono text-3xl md:text-4xl text-[#39FF14] font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {currentText}
        <span className="animate-pulse">|</span>
      </motion.span>
    </div>
  );
}