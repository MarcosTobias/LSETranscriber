import React, { useRef } from 'react';
import "../css/AboutView.css";
import Chevron from "react-chevron";
import Hands from "../img/bg-manos.png";
import Developer from "./aboutComponents/Developer";
import Project from "./aboutComponents/Project";

export default function AboutView(props) {
    const firstDivRef = useRef();

    const scrollDown = () => {
        firstDivRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true });
    }

    return (
        <div>
            <div className="fullDiv">
                <h1 className="mt-5 header1" data-aos="fade-in" data-aos-delay="100">LSETranscriber</h1>
                <h2 className="mt-5" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">About page</h2>
                <img src={Hands} alt="Fingerspelling signs" className="hands" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="600"/>
                    
                <div className="scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" onClick={scrollDown}>
                    Scroll down
                    <br/>
                    <Chevron direction={'down'} className="bottom"/>
                </div>
            </div>

            <div className="margin" ref= { firstDivRef }/>
            
            <Developer/>

            <Project/>

            <div className="margin-bottom">a</div>

        </div>
    );
}