"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HyperJumpTransition() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.4]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let stars = Array.from({ length: 350 }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * width,
    }));

    let frame: number;

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 20, 0.35)";
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      for (const star of stars) {
        const prevZ = star.z;
        star.z -= 14;

        if (star.z <= 1) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
        }

        const x = (star.x / star.z) * width + centerX;
        const y = (star.y / star.z) * height + centerY;

        const prevX = (star.x / prevZ) * width + centerX;
        const prevY = (star.y / prevZ) * height + centerY;

        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 220, 255, 0.9)";
        ctx.lineWidth = Math.max(1, ((width - star.z) / width) * 4);
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      frame = requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <motion.canvas
          ref={canvasRef}
          style={{ opacity, scale }}
          className="absolute inset-0 h-full w-full"
        />

        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.75)_70%)]"
        />

        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <motion.h2
            style={{ opacity, scale }}
            className="text-5xl font-bold"
          >
            Hyperjump
          </motion.h2>
        </div>
      </div>
    </section>
  );
}