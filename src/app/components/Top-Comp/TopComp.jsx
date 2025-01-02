import React, { useEffect } from 'react'

import SplitType from 'split-type';

//styles
import './top-comp.scss';
import gsap from 'gsap';

import CanvasComp from '@components/Canvas-Comp/CanvasComp';

export default function TopComp({ Progress }) {

    // const sValue = (Progress.Progress + (Progress.Page - 1));

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heading = new SplitType(".heading");
            const headingChars = heading.chars;

            // Set initial state for heading and sub-heading
            gsap.set(headingChars, { yPercent: -200, opacity: 0 });
            gsap.set(".sub-heading", { yPercent: -280, opacity: 0 });


            // Animate heading characters
            gsap.to(headingChars, {
                yPercent: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 2,
                delay: 0.5,
                ease: "power4.inOut",
            });

            // Animate sub-heading
            gsap.to(".sub-heading", {
                yPercent: 0,
                opacity: 1,
                duration: 1.5,
                delay: 1.5,
                ease: "power4.inOut",
            });
        });

        return () => ctx.revert();
    }, []);


    return (
        <div className="top-comp-main"
            style={{
                // transform: sValue > 0.05 && `translateY(-${sValue * 160}%)`,
                // transition: "transform 0.2s ease-out",
            }}>
            <CanvasComp />
            <h1 className='heading'>StarClinch</h1>
            <p className="sub-heading">
                India's Foremost Talent Hub <br />
                <span>from</span> <span className='bold-text'>Discovery to Performance</span>
            </p>
        </div>

    )
}
