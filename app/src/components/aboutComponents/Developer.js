import React from 'react';
import { Divider } from "semantic-ui-react";
import Marcos from "../../img/photo2.png";

export default function Developer(props) {
    return (
        <>
            <Divider/>
            <div className="banner">
                Developer
            </div>
            <Divider/>

            <div className="flex">
                <div className="container">
                    <div className="row">
                        <div className="col-sm center2">
                            <div className="centering" data-aos="slide-right" data-aos-easing="ease-in-out-back" data-aos-duration="700">
                                <img className="marcos" src={ Marcos } alt="Programmer mugshot"/>
                            </div>
                        </div>
                        <div className="col-sm center3">
                            <div className="pb-5">
                                <p className="mb-5" id="name" data-aos="zoom-in" data-aos-delay="300" data-aos-ease="ease">Marcos Tobías Muñiz</p>
                                <p id="desc" data-aos="zoom-in" data-aos-delay="500" data-aos-ease="ease">
                                    I'm an undergrad Software Engineer at the University of Oviedo in Spain. I've always been interested in Machine Learning,
                                    that is why during Summer 2021 I decided to embark on this adventure of image recognition. 
                                </p>
                                <p id="desc" data-aos="zoom-in" data-aos-delay="500" data-aos-ease="ease">
                                    At the beginning of my last year at
                                    University, I decided to build as my final degree project a sign to speech transcriber for the Spanish Sign Language, since I
                                    thought it could be very interesting for deepening my ML knowledge, and something that could help real people.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
