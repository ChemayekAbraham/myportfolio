import React, { useEffect, useState } from 'react';

export const MouseGlow: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -200, y: -200 });
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on pointer-capable devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none z-30 transition-opacity duration-300"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '480px',
        height: '480px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%)',
        filter: 'blur(10px)',
      }}
    />
  );
};
