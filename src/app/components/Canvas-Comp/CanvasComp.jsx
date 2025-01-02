"use client";

import './canvas-comp.scss';
import React, { useRef, Suspense } from 'react';
import { angleToRadians } from './angle';
import { useFrame, Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Float, Center } from '@react-three/drei';
import { Model } from './Logo-transformed';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { ScrollControls, Text } from '@react-three/drei';

export default function CanvasComp() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="canvas-container">
                <Canvas className="canvas-main" shadows>
                    <ScrollControls pages={3}>
                        <CanvasComponent  />
                    </ScrollControls>
                </Canvas>
            </div>
           
        </Suspense>
    );
}

function CanvasComponent() {
    const { viewport } = useThree();


    return (<>
        <PerspectiveCamera makeDefault position={[0, 1, -5]} />
        <ambientLight intensity={1.5} />
        <directionalLight
            position={[-1, -1, 0]}
            intensity={400}
            color={"#F12271"}
            castShadow
        />
        <directionalLight
            position={[1, 1, 0]}
            intensity={200}
            color={"#FA642F"}
            castShadow
        />
        <OrbitControls
            minPolarAngle={angleToRadians(80)}
            maxPolarAngle={angleToRadians(80)}
            enableZoom={false}
        />

        <EffectComposer>
            <Bloom luminanceThreshold={1.5} mipmapBlur />
        </EffectComposer>

        <Float floatIntensity={1.5} floatingRange={[-0.25, 0.25]} >
            <Center>
                <Model scale={2} Viewport={viewport} />
            </Center>
        </Float>



    </>)
}

function CameraControls() {
    const orbitControlRef = useRef(null);
    useFrame((state) => {
        if (orbitControlRef.current) {
            const { x, y } = state.mouse;
            orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlRef.current.setPolarAngle((y + 0.5) * angleToRadians(90));
        }
    });

    return <OrbitControls ref={orbitControlRef} />;
}
