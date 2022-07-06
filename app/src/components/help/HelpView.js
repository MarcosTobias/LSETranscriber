import React from 'react';
import "../../css/HelpView.css";
import MainButtons from "../../img/main_buttons.png";
import { useTranslation, Trans } from 'react-i18next';

export default function HelpView() {
    const { t } = useTranslation();

    return(
        <div className="helper">
            <h1 className="mt-5 header1">{t('help.help')}</h1>
            <div className="helpContent">
                <h2>{t('help.subtitle')}</h2>
                <p>
                    {t('help.text1')}
                </p>
                <p>
                    {t('help.text2')}
                    <img src={MainButtons} alt={t('help.alt')} className="mainButtons"/>

                </p>
                <p className="mt-5">
                    <Trans i18nKey="help.text3">
                        <strong>1. Grabar/Parar:</strong> Pulsando este botón se alternará la grabación. Mientras estás grabando se realizará una captura de tu webcam cada dos segundos, ¡así que estate preparado!
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="help.text4">
                        <strong>2. Borrar:</strong> Este botón borrará la predicción al completo, en el caso de que quieras comenzar una nueva
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="help.text5">
                        <strong>3. Leer:</strong> Al pulsar este botón se leerá la predicción actual, en español.
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="help.text6">
                        <strong>4. Temporizador:</strong> Este elemento es un temporizador que te ayudará a saber cuanto tiempo tienes antes de la siguiente captura. El temporizador solo aparecerá en la pantalla mientras estás grabando.
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="help.text7">
                        <strong>5. Signo de interrogación:</strong> Si pasas el ratón por encima suya, aparecerá una pantalla en la que podrás ver todos los signos reconocibles por LSETranscriber. ¡Por si acaso se te olvidó alguno!
                    </Trans>
                </p>
            </div>
            <div className="margin-bottom">a</div>
        </div>
    ); 
}