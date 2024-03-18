'use client'
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

import CanvasLoader from "./Loader";
import { degToRad } from "maath/misc";

const Computers = ({ isMobile }) => {
  const { nodes } = useGLTF("/mnm-logo-three.glb");
  const goldMaterial = new MeshStandardMaterial({
    color: "gold",
    metalness: 1,
    roughness: 0.3,
  });

  const circle1Ref = useRef();
  const circle2Ref = useRef();
  const circle3Ref = useRef();
  const lettersRef = useRef();

  // Rotate the circles on each frame
  useFrame(() => {
    const delta = 0.005; // Adjust rotation speed as needed

    // Rotate Circle 1 and Circle 3 clockwise
    // Ensure refs are defined
    if (circle1Ref.current && circle3Ref.current && circle2Ref.current) {
      // Rotate Circle 1 and Circle 3 clockwise
      circle1Ref.current.rotation.y += delta;
      circle3Ref.current.rotation.x += delta / 2;
      circle3Ref.current.rotation.z += delta;

      // Rotate Circle 2 counter-clockwise
      circle2Ref.current.rotation.y -= delta;
      circle2Ref.current.rotation.x -= delta;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[100, -44, -78]}
        // position={[x, y, z]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <group
        // dispose={null}
        scale={isMobile ? 0.2 : 0.4}
        rotation={[0, degToRad(90), 0]}
      >
        <group ref={circle1Ref}>
          <mesh
            geometry={nodes.circle1.geometry}
            material={goldMaterial}
            position={[0.151, 0.065, 0.05]}
            rotation={[1.652, 0, 0]}
            scale={61.947}
          />
        </group>
        <group ref={circle3Ref}>
          <mesh
            geometry={nodes.circle3.geometry}
            material={goldMaterial}
            position={[0.151, 0.065, 0.05]}
            rotation={[1.652, 0, 0]}
            scale={61.947}
          />
        </group>
        <group ref={circle2Ref}>
          <mesh
            geometry={nodes.circle2.geometry}
            material={goldMaterial}
            position={[0.151, 0.065, 0.05]}
            rotation={[1.652, 0, 0]}
            scale={61.947}
          />
        </group>
        <group>
          <mesh
            geometry={nodes.letters.geometry}
            material={goldMaterial}
            position={[0.151, 0.065, 0.05]}
            rotation={[1.652, 0, 0]}
            scale={61.947}
          />
        </group>
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
