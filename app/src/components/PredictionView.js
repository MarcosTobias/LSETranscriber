import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../redux/slices/predictionSlice/predictionSlice";
import "../css/PredictionView.css";
import Webcam from "react-webcam"
import Predictions from "./Predictions.js"
import "../css/timer.css"
import "../css/Video.css"

export default function PredictionVirew(props) {
    const dispatch = useDispatch();
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
            </div>
            <Predictions />
        </div>

    );
}
