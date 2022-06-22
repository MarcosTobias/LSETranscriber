import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../redux/slices/predictionSlice/predictionSlice";
import "../css/PredictionView.css";
import Webcam from "react-webcam";
import Predictions from "./Predictions.js";
import "../css/timer.css";
import "../css/Video.css";
import HelpIcon from '@mui/icons-material/Help';
import Signs from "../img/bg-manos-small.png";

export default function PredictionView(props) {
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
                            <div className="col-sm helpButton">
                                <HelpIcon onMouseEnter={doShowSigns}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Predictions />
            </div>
            {showSigns &&
                <div className="signs" onMouseLeave={doShowSigns}>
                    <img className="signsHelp" src={Signs} alt="Fingerspelling for the LSE"/>
                    <p className="info">
                        This is just a memo of the signs recognisable by LSETranscriber. For more information regarding 
                        how the app works visit the Help page on the top right corner.
                    </p>
                </div>
            }
            <div className="pt-5 pb-5"></div>
        </div>
    );
}
