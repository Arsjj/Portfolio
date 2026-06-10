// "use client"

// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { useState } from "react";
// import { useScroll } from "framer-motion";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// // import { motion } from "framer-motion-3d";
// import { OrbitControls } from "@react-three/drei";

// const Earth = () => {
//   const [scrollYProgress, setScrollYProgress] = useState(0);

//   /* Used for smooth rotation if you're not using Lenis Scroll */
//   // const smoothRotation = useSpring(scrollYProgress, {
//   // damping: 20
//   // });

//   useFrame(() => {
//     const delta = 0.001;

//     setScrollYProgress((prev) => prev - delta);
//   });

//   const [color, normal, aoMap] = useLoader(TextureLoader, [
//     "./earth/color.webp",
//     "./earth/normal.webp",
//     "./earth/occlusion.webp",
//   ]);

//   return (
//     <motion.mesh scale={2} rotation-y={scrollYProgress}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
//     </motion.mesh>
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas>
//       <OrbitControls
//         // autoRotate
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//       <ambientLight intensity={0.1} />
//       <directionalLight intensity={8.5} position={[1, 0, -0.25]} />
//       <Earth />
//     </Canvas>
//   );
// };

// export default EarthCanvas;

"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

const Earth = () => {
  const earthRef = useRef();

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/earth/color.webp",
    "/earth/normal.webp",
    "/earth/occlusion.webp",
  ]);

  useFrame(() => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y -= 0.0012;
  });

  return (
    <mesh ref={earthRef} scale={1.15} rotation={[0, 0, -0.41]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={43} position={[10, 0, -3]} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
