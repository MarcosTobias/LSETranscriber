import React from 'react';
import { Divider } from "semantic-ui-react";
import Logo from "../../../img/logo-lse.png";
import { useTranslation, Trans } from 'react-i18next';

export default function Project(props) {
    const { t } = useTranslation();
    
    return (
        <div className="marginTop">
            <Divider/>
            <div className="banner">
                {t('lsetranscriber')}
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
                                <p className="mb-5" id="name" data-aos="zoom-in" data-aos-delay="300" data-aos-ease="ease">{t('project.title')}</p>
                                <p id="desc" data-aos="flip-up" data-aos-delay="500" data-aos-ease="ease">
                                    <Trans i18nKey="project.text1">
                                        LSETranscriber tiene dos partes. Una aplicación web, que estás usando ahora mismo, y un servicio web. El servicio web es el que se encarga de recibir las capturas de la webcam y devolver una predicción. Esta separación surge con la intención de permitir que se usen por separado. Ambos son de código libre, por lo que si estás interesado en ampliarlo, no dudes en ir al repositorio de <a href='https://github.com/MarcosTobias/LSETranscriber'>Github</a>!. Y si no quieres expandir la aplicación web no te preocupes, el modelo entrenado para la predicción de signos también esta subido en ese repositorio.
                                    </Trans>
                                </p>
                                <p id="desc" data-aos="flip-up" data-aos-delay="500" data-aos-ease="ease">
                                    {t('project.text2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}