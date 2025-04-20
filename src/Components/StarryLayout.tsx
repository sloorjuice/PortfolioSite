"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function StarryLayout({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.05,
      dy: (Math.random() - 0.5) * 0.05,
      dAlpha: (Math.random() - 0.5) * 0.02,
    }));

    // ✅ Declare shootingStars array OUTSIDE animate()
    const shootingStars: {
      x: number;
      y: number;
      length: number;
      speed: number;
      alpha: number;
      life: number;
    }[] = [];

    // ✅ Also define this outside animate
    const spawnShootingStar = () => {
      const y = Math.random() * height * 0.5; // top half of screen
      shootingStars.push({
        x: Math.random() * width,
        y,
        length: Math.random() * 300 + 100,
        speed: Math.random() * 10 + 6,
        alpha: 1,
        life: 0,
      });
    };

    // 🔁 Repeat every 3–6 seconds
    const shootingInterval = setInterval(
      spawnShootingStar,
      Math.random() * 3000 + 3000
    );

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // ✨ Draw stars
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;
        star.alpha += star.dAlpha;

        if (star.alpha <= 0 || star.alpha >= 1) star.dAlpha *= -1;
        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // 🌠 Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.speed;
        s.y += s.speed;
        s.life += 1;
        s.alpha -= 0.005;

        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.length, s.y - s.length);
        grad.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length, s.y - s.length);
        ctx.stroke();

        if (s.alpha <= 0) shootingStars.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
