"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  /* Used for smooth rotation if you're not using Lenis Scroll */
  // const smoothRotation = useSpring(scrollYProgress, {
  // damping: 20
  // });

  useFrame(() => {
    const delta = 0.001;

    setScrollYProgress((prev) => prev - delta);
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "./earth/color.webp",
    "./earth/normal.webp",
    "./earth/occlusion.webp",
  ]);

  return (
    <motion.mesh scale={2} rotation-y={scrollYProgress}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </motion.mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas>
      <OrbitControls
        // autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
