import React, { useEffect, useRef, useState } from 'react';

//styles
import './most-trusted-platform.scss';

export default function MostTrustedPlatform({ Progress }) {

    const sValue = (Progress.Progress + (Progress.Page - 1));

    return (
        <div
            className="most-trusted-platform-main">

            <div className="card1 type-one"></div>

            <div className="card-container">
                <div className="card2 type-two"></div>
                <div className="card3 type-two"></div>
            </div>

            <div className="card-main"
                style={{
                    minWidth: `${Math.min(100, (Math.max(34, (sValue * 200))))}%`,
                    height: `${Math.min(48, (Math.max(32, (sValue * 100))))}vw`,

                    // transform: `translateX(-${Math.min(30, (sValue * 60))}%)`
                }}
            ></div>

            <div className="card-container">
                <div className="card4 type-two"></div>
                <div className="card5 type-two"></div>
            </div>

            <div className="card6 type-one"></div>

        </div>
    )
}
