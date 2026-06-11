"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Works from "./Works";
import Contact from "./Contact";
import { StarsCanvas } from "./canvas";
import About from "./About";

export default function HyperScrollSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const currentScale = useTransform(
        scrollYProgress,
        [0, 0.42],
        [1, 1.35]
    );

    const nextScale = useTransform(
        scrollYProgress,
        [0.52, 1],
        [0.96, 1]
    );

    const nextY = useTransform(
        scrollYProgress,
        [0.55, 0.8, 0.8],
        ["10%", "0%", "0%"]
    );

    const currentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const nextOpacity = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);
    const jumpOpacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);

    const contactFormX = useTransform(
        scrollYProgress,
        [0.55, 0.75],
        ["-120%", "0%"]
    );

    const earthX = useTransform(
        scrollYProgress,
        [0.55, 0.75],
        ["120%", "0%"]
    );

    const contactInnerOpacity = useTransform(
        scrollYProgress,
        [0.55, 0.7],
        [0, 1]
    );

    const contactScaleRaw = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        [0.8, 1]
    );

    const contactScale = useSpring(contactScaleRaw, {
        stiffness: 150,
        damping: 18,
    });


    const currentDisplay = useTransform(
        scrollYProgress,
        (v) => (v > 0.4 ? "none" : "flex")
    );

    const getBoost = () => {
        const p = scrollYProgress.get();

        // 0 at start/end, 1 in middle
        if (p < 0.25 || p > 0.75) return 0;

        return 1 - Math.abs(p - 0.5) / 0.25;
    };

    const boost = getBoost();
    const speed = 18 + boost * 45;
    const brightness = 0.9 + boost * 0.8;
    const size = 5 + boost * 8;
    const glow = boost * 25;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;

        canvas.width = w;
        canvas.height = h;

        const stars = Array.from({ length: 450 }, () => ({
            x: Math.random() * w - w / 2,
            y: Math.random() * h - h / 2,
            z: Math.random() * w,
        }));

        let frame: number;

        function animate() {
            ctx.fillStyle = "rgba(0, 0, 15, 0.35)";
            ctx.fillRect(0, 0, w, h);

            const cx = w / 2;
            const cy = h / 2;

            const p = scrollYProgress.get();

            for (const star of stars) {
                const prevZ = star.z;

                const boost =
                    p < 0.25 || p > 0.75
                        ? 0
                        : 1 - Math.abs(p - 0.5) / 0.25;

                const speed = 18 + Math.pow(boost, 2) * 40;

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
                ctx.strokeStyle = `rgba(180, 225, 255, ${brightness})`;
                ctx.lineWidth = Math.max(1, ((w - star.z) / w) * size);

                ctx.shadowBlur = glow;
                ctx.shadowColor = "rgba(120, 200, 255, 1)";
                ctx.moveTo(px, py);
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            frame = requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <section ref={ref} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.canvas
                    ref={canvasRef}
                    style={{ opacity: jumpOpacity }}
                    className="absolute inset-0 h-full w-full"
                />

                <motion.div
                    style={{
                        opacity: currentOpacity,
                        scale: currentScale,
                        display: currentDisplay,
                        pointerEvents: "none",
                    }}
                    className="absolute inset-0 z-10 flex items-center justify-center text-white"
                >

                    <Works />

                </motion.div>

                <motion.div
                    style={{
                        opacity: nextOpacity,
                        // scale: contactScale,
                    }}
                    className="absolute z-20 w-full"
                >
                    <div className="relative z-0">
                        <Contact
                            formX={contactFormX}
                            scale={contactScale}
                            // earthX={earthX}
                        // innerOpacity={contactInnerOpacity}
                        />
                        <StarsCanvas />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}