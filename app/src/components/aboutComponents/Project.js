import React from 'react';
import { Divider } from "semantic-ui-react";
import Logo from "../../img/logo-lse.png";

export default function Project(props) {
    return (
        <div className="marginTop">
            <Divider/>
            <div className="banner">
                LSETranscriber
            </div>
            <Divider/>

            <div className="flex">
                <div className="container">
                    <div className="row">
                        <div className="col-sm center2">
                            <div className="centering">
                                <img src={ Logo } alt="LSETranscriber logo" data-aos="zoom-out-down" data-aos-delay="800" data-aos-easing="ease"/>
                            </div>
                        </div>
                        <div className="col-sm center3">
                            <div className="pb-5">
                                <p className="mb-5" id="name" data-aos="zoom-in" data-aos-delay="300" data-aos-ease="ease">Sign to speech transcriber</p>
                                <p id="desc" data-aos="flip-up" data-aos-delay="500" data-aos-ease="ease">
                                    LSETranscriber has two sections. A web application, which you are using right now, and a web service. The service is the one that 
                                    makes the predictions of the signs performed. The idea behind separating the web from the service is for being able to use them
                                    separately. Both are open source, so if you are interested, jump to the <a href="https://github.com/MarcosTobias/LSETranscriber">GitHub</a> repo!
                                    And if you don't want to extend the application, don't worry. The trained model for sign recognition is uploaded as well.
                                </p>
                                <p id="desc" data-aos="flip-up" data-aos-delay="500" data-aos-ease="ease">
                                    Quick mention to the technologies used. The model was created and trained with Tensorflow and Keras. The REST API was made using Flask, 
                                    and this web application is built with React.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}