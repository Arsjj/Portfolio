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

    const targetScale = 1.15;
    const currentScale = earthRef.current.scale.x;

    earthRef.current.scale.setScalar(
      currentScale + (targetScale - currentScale) * 0.08,
    );
  });

  return (
    <mesh ref={earthRef} scale={1} rotation={[0, 0, -0.41]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
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
