
"use client"

import React, { useState, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { Stickyroll } from '@stickyroll/react';

//styles
import './app.scss';


//components
import Image from 'next/image';

// --------Custom--------------------
import CanvasComp from '@components/Canvas-Comp/CanvasComp';
import TopComp from '@components/Top-Comp/TopComp';
import ProblemFaced from '@components/Problem-Faced/ProblemFaced';
import MostTrustedPlatform from '@components/Most-Trusted-Platform/MostTrustedPlatform';

//-------------------------------------------
import Stars from '@components/Canvas-Comp/stars';

//imgs
import bgImg from '@assets/imgs/background-img.jpg';
// ======================================================

export default function App() {
    const [progress, setProgress] = useState({
        Page: '',
        Progress: ''
    });

    const sValue = (progress.Progress + (progress.Page - 1));



    return (
        <div className='app-main-container'>
            <p style={{ color: '#fff', position: 'fixed', zIndex: '10', top: '0' }}>
                {progress.Progress}{' '}{progress.Page}
                <br />
                {34 * sValue * 100}
                {/* 
                {progress.Progress + (progress.Page - 1)}
                <br />
                {progress.Progress + (progress.Page - 1.3)} */}


            </p>
            <Suspense fallback={null}>
                <div className="star-canvas-container">
                    <Canvas className='stars-Canvas'>
                        <Stars position={[0, 0, -1]} />
                    </Canvas>
                    <Image
                        src={bgImg}
                        alt="bg"
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                        className='bg-img'

                    />
                </div>
                {/* <CanvasComp /> */}
            </Suspense>
            <TopComp Progress={progress} />
            <ProblemFaced Progress={progress} />


            <Stickyroll
                pages={1}
                factor={2}

                onProgress={(progress, page, index) => {
                    setProgress({
                        Page: page,
                        Progress: progress
                    })
                }}

            >

                <div className="app-scroll-main">
                    <MostTrustedPlatform
                        Progress={progress}
                    />


                </div>

            </Stickyroll >

            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#000fff'
                }}
            ></div>


        </div >
    )
}
