/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Caio de Oliveira (https://sketchfab.com/caio17011)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tron-sci-fi-f5be8602bb6243f4aa53f1d27019113b
Title: Tron  sci-fi
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn2SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn5SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
