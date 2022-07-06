import React from 'react';
import { Divider } from "semantic-ui-react";
import Marcos from "../../../img/photo2.png";
import { useTranslation } from 'react-i18next';

export default function Developer(props) {
    const { t } = useTranslation();

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
                                <img className="marcos" src={ Marcos } alt={t('developer.alt')}/>
                            </div>
                        </div>
                        <div className="col-sm center3">
                            <div className="pb-5">
                                <p className="mb-5" id="name" data-aos="zoom-in" data-aos-delay="300" data-aos-ease="ease">Marcos Tobías Muñiz</p>
                                <p id="desc" data-aos="zoom-in" data-aos-delay="500" data-aos-ease="ease">
                                    {t('developer.text1')}
                                </p>
                                <p id="desc" data-aos="zoom-in" data-aos-delay="500" data-aos-ease="ease">
                                    {t('developer.text2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
