"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import Contact from "./Contact";
import { StarsCanvas } from "./canvas";
import Works from "./Works";

type Star = {
    angle: number;
    radius: number;
    z: number;
    speed: number;
    color: string;
};

export default function HyperSpaceTransition() {
    const ref = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const currentOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4],
        [1, 1, 0]
    );

    const currentScale = useTransform(
        scrollYProgress,
        [0, 0.4],
        [1, 1.4]
    );

    const currentY = useTransform(
        scrollYProgress,
        [0.2, 0.4],
        ["0%", "-60%"]
    );

    const nextOpacity = useTransform(
        scrollYProgress,
        [0.55, 0.75, 1],
        [0, 1, 1]
    );

    const nextScale = useTransform(
        scrollYProgress,
        [0.55, 1],
        [0.9, 1]
    );

    const nextY = useTransform(
        scrollYProgress,
        [0.55, 0.8],
        ["100%", "0%"]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const createStar = (): Star => ({
            angle: Math.random() * Math.PI * 2,
            radius: 0.18 + Math.random() * 0.82,
            z: Math.random() * width,
            speed: 20 + Math.random() * 15,
            color:
                Math.random() > 0.85
                    ? "#7dd3fc"
                    : "#ffffff",
        });

        const stars: Star[] = Array.from(
            { length: 1500 },
            createStar
        );

        let frame: number;

        const animate = () => {
            const cx = width / 2;
            const cy = height / 2;

            const gradient = ctx.createRadialGradient(
                cx,
                cy,
                0,
                cx,
                cy,
                width
            );

            gradient.addColorStop(0, "#020311");
            gradient.addColorStop(0.5, "#08142b");
            gradient.addColorStop(1, "#000");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            for (const star of stars) {
                const prevZ = star.z;

                star.z -= star.speed;

                if (star.z <= 1) {
                    Object.assign(star, createStar());
                    star.z = width;
                }

                const depth = width / star.z;
                const prevDepth = width / prevZ;

                const x =
                    cx +
                    Math.cos(star.angle) *
                    star.radius *
                    220 *
                    depth;

                const y =
                    cy +
                    Math.sin(star.angle) *
                    star.radius *
                    220 *
                    depth;

                const px =
                    cx +
                    Math.cos(star.angle) *
                    star.radius *
                    220 *
                    prevDepth;

                const py =
                    cy +
                    Math.sin(star.angle) *
                    star.radius *
                    220 *
                    prevDepth;

                if (
                    Math.hypot(x - cx, y - cy) < 80
                )
                    continue;

                ctx.beginPath();

                ctx.moveTo(px, py);
                ctx.lineTo(x, y);

                ctx.strokeStyle = star.color;
                ctx.lineWidth = Math.min(
                    4,
                    depth * 1.3
                );

                ctx.shadowBlur = 15;
                ctx.shadowColor = star.color;

                ctx.stroke();
            }

            frame = requestAnimationFrame(
                animate
            );
        };

        animate();

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener(
            "resize",
            resize
        );

        return () => {
            cancelAnimationFrame(frame);

            window.removeEventListener(
                "resize",
                resize
            );
        };
    }, []);

    return (
        <section
            ref={ref}
            className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen overflow-hidden bg-black">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 h-full w-full"
                />

                <motion.div
                    style={{
                        opacity: currentOpacity,
                        scale: currentScale,
                        y: currentY,
                    }}
                    className="absolute inset-0 z-10 flex items-center justify-center"
                >
                   <Works />
                </motion.div>

                <motion.div
                    style={{
                        opacity: nextOpacity,
                        scale: nextScale,
                        y: nextY,
                    }}
                    className="absolute inset-0 z-20 flex items-center justify-center"
                >
                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}