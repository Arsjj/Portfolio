"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import Contact from "./Contact";
import { StarsCanvas } from "./canvas";
import Footer from "./Footer";

export default function HyperScrollSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [phase, setPhase] = useState<"idle" | "jump" | "content">("idle");

    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.45,
    });

    let sp = phase === "content" ? 1 : 0.5
    console.log(sp)

    const contactScale = useSpring(0.85, {
        stiffness: 250,
        damping: 18,
    });

    useEffect(() => {
        contactScale.set(phase === "content" ? 1 : 0.85);
    }, [phase, contactScale]);

    useEffect(() => {
        let timer: number | undefined;

        if (isInView) {
            setPhase("jump");

            timer = window.setTimeout(() => {
                setPhase("content");
            }, 1300);
        } else {
            setPhase("idle");
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isInView]);

    useEffect(() => {
        if (phase !== "jump") return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let frame = 0;
        let running = true;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();

        const stars = Array.from({ length: 350 }, () => ({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
        }));

        const startTime = performance.now();

        const animate = () => {
            if (!running) return;

            const w = canvas.width;
            const h = canvas.height;
            const cx = w / 2;
            const cy = h / 2;

            ctx.clearRect(0, 0, w, h);

            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / 1300, 1);

            const boost =
                progress < 0.65
                    ? Math.pow(progress / 0.65, 2.2)
                    : Math.pow(1 - (progress - 0.65) / 0.35, 0.7);

            const speed = 16 + boost * 120;

            ctx.fillStyle = `rgba(0, 0, 15, ${0.25 + boost * 0.25})`;
            ctx.fillRect(0, 0, w, h);

            for (const star of stars) {
                const prevZ = star.z;

                star.z -= speed;

                if (star.z <= 1) {
                    star.x = Math.random() * w - cx;
                    star.y = Math.random() * h - cy;
                    star.z = w;
                }

                const x = (star.x / star.z) * w + cx;
                const y = (star.y / star.z) * h + cy;

                const px = (star.x / prevZ) * w + cx;
                const py = (star.y / prevZ) * h + cy;

                ctx.beginPath();
                ctx.strokeStyle = "rgba(180, 225, 255, 1)";
                ctx.lineWidth = Math.max(1, ((w - star.z) / w) * 7);
                ctx.shadowBlur = 20;
                ctx.shadowColor = "rgba(120, 200, 255, 1)";
                ctx.moveTo(px, py);
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            frame = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        animate();

        return () => {
            running = false;
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, [phase]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-visible bg-gradient-to-b from-[#08090f] to-[#05060a]"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <StarsCanvas />
            </div>

            <motion.canvas
                ref={canvasRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "jump" ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 z-10 h-full w-full pointer-events-none"
            />

            <motion.div
                animate={{
                    opacity: phase === "content" ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 18,
                }}
                className="relative z-20"
            >
                <Contact scale={contactScale} />
            </motion.div>
        </section>
    );
}