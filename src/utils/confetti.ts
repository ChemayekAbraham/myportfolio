import confetti from 'canvas-confetti';

export const triggerConfetti = (event?: React.MouseEvent) => {
  try {
    if (event && event.currentTarget) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        origin: { x, y },
        particleCount: 50,
        spread: 60,
        ticks: 200,
        gravity: 1.1,
        colors: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899']
      });
    } else {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
        ticks: 250,
        colors: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899']
      });
    }
  } catch (e) {
    console.error('Confetti trigger error:', e);
  }
};

export const triggerFireworks = () => {
  try {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 40 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  } catch (e) {
    console.error('Fireworks error:', e);
  }
};

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
