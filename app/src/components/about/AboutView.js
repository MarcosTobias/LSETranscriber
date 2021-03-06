import React, { useRef } from 'react';
import "../../css/AboutView.css";
import Hands from "../../img/bg-manos.png";
import Developer from "./aboutComponents/Developer";
import Project from "./aboutComponents/Project";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

export default function AboutView(props) {
    const { t } = useTranslation();

    const firstDivRef = useRef();

    const scrollDown = () => {
        firstDivRef.current.scrollIntoView({ behavior: "smooth", alignToTop: true });
    }

    return (
        <div>
            <div className="fullDiv">
                <h1 className="mt-5 header1" data-aos="fade-in" data-aos-delay="100">{t('lsetranscriber')}</h1>
                <h2 className="mt-5" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{t('about.about')}</h2>
                <img src={Hands} alt={t('about.altSigns')} className="hands" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="600"/>
                    
                <div className="scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" onClick={scrollDown}>
                    {t('about.scrollDown')}
                    <br/>
                    <KeyboardArrowDownIcon direction={'down'} className="bottom"/>
                </div>
            </div>

            <div className="margin" ref= { firstDivRef }/>
            
            <Developer/>

            <Project/>

            <div className="margin-bottom">a</div>

        </div>
    );
}