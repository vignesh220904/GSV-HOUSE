"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  color: string;
  shapeType: number;
  opacity: number;
}

export const FallingFlowersCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const colors = [
      "#FF9E00", // Bright Marigold Orange
      "#FFD700", // Yellow Marigold
      "#FFF8E7", // Jasmine White
      "#FF5E7E", // Pink Lotus
      "#FFAA00", // Golden Amber
    ];

    // Reduced petal count on mobile for 60fps smoothness
    const petalCount = isMobile ? 12 : 30;
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * (isMobile ? 6 : 8) + 5,
      speedY: Math.random() * 1.0 + 0.5,
      speedX: Math.random() * 0.4 - 0.2,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      shapeType: Math.floor(Math.random() * 3),
      opacity: Math.random() * 0.5 + 0.4,
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      if (p.shapeType === 0) {
        ctx.ellipse(0, 0, p.size * 0.5, p.size * 1.2, 0, 0, Math.PI * 2);
      } else if (p.shapeType === 1) {
        ctx.moveTo(0, -p.size);
        ctx.quadraticCurveTo(p.size * 0.6, 0, 0, p.size);
        ctx.quadraticCurveTo(-p.size * 0.6, 0, 0, -p.size);
      } else {
        ctx.moveTo(0, -p.size * 0.8);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.2, p.size * 0.6, p.size, 0, p.size * 1.1);
        ctx.bezierCurveTo(-p.size * 0.6, p.size, -p.size * 0.8, -p.size * 0.2, 0, -p.size * 0.8);
      }
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.6 + p.speedX;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-15 opacity-80 will-change-transform"
    />
  );
};
