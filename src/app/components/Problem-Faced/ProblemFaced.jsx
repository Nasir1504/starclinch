import React from 'react';

//styles
import './problem-faced.scss';

//imgs
import ArjunCard from '@assets/imgs/arjun-card.png';
import KaranCard from '@assets/imgs/karan-card.png';

//components
import Image from 'next/image';

export default function ProblemFaced({ Progress }) {
    const sValue = (Progress.Progress + (Progress.Page - 1.2));

    return (
        <div className="problem-faced-main"
            style={{
                // transform: sValue > 0 && `translateY(-${sValue * 160}%)`,
                // transition: "transform 0.2s ease-out",
            }}
        >

            <h3>Problem Faced</h3>
            <p> A rising social media influencer, lands a promising deal. But his
                dreams are shattered when the company vanishes without paying him,
                leaving him scammed and disheartened.</p>

            <div className="bottom-sec">

                <div className="card"></div>
                <div className="card"></div>



            </div>
        </div>
    )
}
