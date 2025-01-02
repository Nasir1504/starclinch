import React from 'react'

//styles
import './inner-comp.scss';

import Image from 'next/image';

//imgs
import ArtistCard1 from '@assets/imgs/most-trusted-platform/artist-card2.png';
import ArtistCard2 from '@assets/imgs/most-trusted-platform/artist-card3.png';
import ArtistCard3 from '@assets/imgs/most-trusted-platform/artist-card1.png';
import DetailsCard1 from '@assets/imgs/most-trusted-platform/details-card1.png';
import DetailsCard2 from '@assets/imgs/most-trusted-platform/details-card2.png';
import DetailsCard3 from '@assets/imgs/most-trusted-platform/details-card3.png';


export default function InnerComp({ Progress }) {

    const sValue = (Progress.Progress + (Progress.Page - 1.2));
    const sValue2 = (Progress.Progress + (Progress.Page - 1.32));
    const sValue3 = (Progress.Progress + (Progress.Page - 1.58));
    const sValue4 = (Progress.Progress + (Progress.Page - 1.68));
    const sValue5 = (Progress.Progress + (Progress.Page - 1.75));





    return (
        <div className="inner-comp-main-container">

            <section className="dramatic-turn-sec"
                style={{
                    transform: `translateY(-${Math.min(28, (Math.max(0, (sValue * 340))))}vw)`,


                }}
            >
                <div className="colored-circle-one" />
                <div className="colored-circle-two" />

                <div className="inner-heading">
                    India's most <br />
                    <b>TRUSTED</b> <br />
                    entertainment <br />
                    platform
                </div>
                <div className="main-section"
                    style={{
                        width: `${Math.min(100, (Math.max(80, (80 + (sValue * 160)))))}%`
                    }}
                >

                    {/* -------------------------------------------------- */}
                    <div className="inner-sec"

                    >
                        <section className="artist-card-container"
                            style={{
                                transform: `translateY(-${Math.min(100, (Math.max(0, (sValue2 * 380))))}%)`
                            }}
                        >
                            <Image
                                src={ArtistCard1}
                                className="card-img img-card1"
                            />

                            <Image
                                src={ArtistCard2}
                                className="card-img img-card2"
                            />
                            <Image
                                src={ArtistCard3}
                                className="card-img img-card3"
                            />



                        </section>
                        <section className="artist-details-section"
                            style={{
                                transform: `translateY(-${Math.min(100, (sValue2 * 380))}%)`
                            }}
                        >
                            <h3>THE DRAMATIC TURN</h3>
                            <p>
                                In a twist of fate, Karan hires Arjun for a major event
                                through StarClinch. The collaboration is <br /> a huge
                                success, with Arjun's engaging presence and Karan's flawless
                                organization.
                            </p>

                            <div className="details-card1"
                                style={{
                                    transform: `translate(-${Math.min(50, (Math.max(0, sValue4 * 250)))}vw)`
                                }}
                            >
                                <Image
                                    alt='details card'
                                    src={DetailsCard1}
                                    className='details-card-img'
                                    style={{
                                        transform: `rotate(${Math.min(15, (Math.max(0, sValue3 * 150)))}deg)`
                                    }}
                                />
                            </div>

                            <div className="details-card2"
                                style={{
                                    transform: `translate(${Math.min(50, (Math.max(0, sValue4 * 250)))}vw)`
                                }}
                            >
                                <Image
                                    alt='details card'
                                    src={DetailsCard2}
                                    className='details-card-img'
                                    style={{
                                        transform: `rotate(-${Math.min(15, (Math.max(0, sValue3 * 150)))}deg)`
                                    }}
                                />
                            </div>
                            <div className="details-card3"
                                style={{
                                    transform: `translateY(-${Math.min(102, (Math.max(0, sValue4 * 500)))}%)`
                                }}
                            >
                                <Image
                                    alt='details card'
                                    src={DetailsCard3}
                                    className='details-card-img'
                                />
                            </div>
                        </section>
                    </div>
                </div>

            </section >

        </div >
    )
}
