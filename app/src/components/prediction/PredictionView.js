import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../../redux/slices/predictionSlice/predictionSlice";
import "../../css/PredictionView.css";
import Webcam from "react-webcam";
import Predictions from "./Predictions.js";
import "../../css/timer.css";
import "../../css/Video.css";
import HelpIcon from '@mui/icons-material/Help';
import Signs from "../../img/bg-manos-small.png";
import { useTranslation } from 'react-i18next';

export default function PredictionView(props) {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const predictionError = useSelector((state) => state.predictions.error);
    const isRecording = useSelector(state => state.predictions.isRecording);
    const index = useSelector(state => state.predictions.index);

    let [showSigns, setShowSigns] = useState(false);

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    }
    const webcamRef = React.useRef(null);

    const capture = () => {
        const img = webcamRef.current.getScreenshot();

        dispatch(fetchPrediction(img, index));
    }

    const doShowSigns = () => {
        setShowSigns(!showSigns);
    }



    if (predictionError !== null)
        console.log(predictionError);

    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                capture();
            }, 2000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });


    return (
        <div className="helper">
            <div className="scrollGeneral">
                <div className="box">
                    <div className="gradient-border">
                        <Webcam
                            className="webcam"
                            audio={false}
                            height={400}
                            ref={webcamRef}
                            screenshotFormat="image/png"
                            width={880}
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="timerDiv">
                                {isRecording &&
                                    <div id="timer" className="timer">
                                        <div id="mask" className="mask"></div>
                                    </div>
                                }
                                </div>
                            </div>
                            <div className="col-sm helpButton" role="figure">
                                <HelpIcon onMouseEnter={doShowSigns}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Predictions />
            </div>
            {showSigns &&
                <div className="signs" onMouseLeave={doShowSigns}>
                    <img className="signsHelp" src={Signs} alt={t('signsHelp.alt')}/>
                    <p className="info">
                        {t('signsHelp.text')}
                    </p>
                </div>
            }
            <div className="pt-5 pb-5"></div>
        </div>
    );
}
