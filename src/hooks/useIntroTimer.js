import { useState, useEffect, useCallback } from 'react';

/** Controls intro countdown and exit animation */
export function useIntroTimer(isOpen, onComplete) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete?.();
      setIsExiting(false);
      setProgress(0);
      setStepIndex(0);
    }, 450);
  }, [isExiting, onComplete]);

  // Progress counter (0 to 100)
  useEffect(() => {
    if (!isOpen || isExiting) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(handleFinish, 180);
          return 100;
        }
        const next = prev + 4;
        if (next >= 33 && next < 66) setStepIndex(1);
        else if (next >= 66) setStepIndex(2);
        return Math.min(next, 100);
      });
    }, 22);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen, isExiting, handleFinish]);

  return {
    progress,
    stepIndex,
    isExiting,
    handleFinish
  };
}

export default useIntroTimer;
