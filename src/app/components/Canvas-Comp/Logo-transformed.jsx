
import React, { useRef, useEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { angleToRadians } from './angle'
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';

export function Model(props) {


  const { nodes, materials } = useGLTF('/logo-transformed.glb')
  const groupRef = useRef(null);
  const scroll = useScroll(); // Hook to track scroll position

  useEffect(() => {
    if (groupRef.current) {


      gsap.to(groupRef.current.rotation, {
        y: angleToRadians(-180),
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });
    }
  }, []);

    // Move the model up as the user scrolls
    useFrame(() => {
      if (groupRef.current) {
        const scrollY = scroll.offset; // Scroll offset (0 to 1)
        groupRef.current.position.y = props.Viewport.height * 0.4 + scrollY * 5; // Adjust multiplier for speed
      }
    });
  

  return (
    <group ref={groupRef} {...props} position={[0, props.Viewport.height * 0.5, 0]} dispose={null}>
      <pointLight intensity={1} decay={2} distance={2000} position={[0.06, -3.21, 2.133]} scale={0.011} />
      <mesh
        geometry={nodes.Shape_3.geometry}
        material={nodes.Shape_3.material}
        position={[-0.457, -3.049, -0.555]}
        scale={0.011} >

        <meshStandardMaterial color={"black"} metalness={0.1} roughness={0.4} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/logo-transformed.glb')


// to convert glb file into gltf use command: 
// npx gltfjsx ./public/logo-transformed.glb