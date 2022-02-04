import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../redux/slices/predictionSlice/predictionSlice";
import "../css/PredictionView.css";
import SendIcon from "@material-ui/icons/Send"
import Webcam from "react-webcam"
import Predictions from "./Predictions.js"
import "../css/timer.css"

export default function PredictionVirew(props) {
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null);
    const predictionError = useSelector((state) => state.predictions.error);
    const isRecording = useSelector(state => state.predictions.isRecording);
    const index = useSelector(state => state.predictions.index);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    }
    const webcamRef = React.useRef(null);

    const capture = () => {
        const img = webcamRef.current.getScreenshot();
        //setPhoto(img);
        
        dispatch(fetchPrediction(img, index));
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
        <div className="trans">
            <div className="box">
                <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    width={880}
                    videoConstraints={videoConstraints}
                />
            </div>
            {photo !== null &&
                <img className="picture" alt="location uploaded" src={photo} />
            }


            {isRecording &&
                <div id="timer" className="timer">
                    <div id="mask" className="mask"></div>
                </div>
            }

            <div className="fabcontainer">
                <Fab color="primary" aria-label="send" onClick={capture}>
                    <SendIcon />
                </Fab>
            </div>
            <Predictions />
        </div>

    );
}
