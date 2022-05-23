import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSpeechSynthesis } from "react-speech-kit";
import { removePrediction, switchRecording } from "../redux/slices/predictionSlice/predictionSlice";
import LetterButton from './LetterButton';
import "../css/Predictions.css";

export default function Predictions() {
    const prediction = useSelector(state => state.predictions.prediction);
    const isRecording = useSelector(state => state.predictions.isRecording);
    const { speak, voices } = useSpeechSynthesis();
    const dispatch = useDispatch();

    console.log(prediction);

    const onClick = () => {
        const text = prediction.join('');
        speak({ text: text, voice: voices[7] });
    }

    const onClickRemove = () => {
        dispatch(removePrediction());
    }

    const onClickRecord = () => {
        dispatch(switchRecording());

    }

    let result;

    if (prediction.length !== 0) {
        result = (
            <Row className="mt-5">
                <Col className="mb-5">
                        <button className="btn-gradient" onClick={onClick}>Read</button>
                        <button className="btn-gradient" onClick={onClickRemove}>Remove</button>
                        <button className="btn-gradient" onClick={onClickRecord}>Start/stop</button>
                </Col>
                <ul>
                    {prediction.map(((item, index) => (
                        <LetterButton content={item} index={index} key={index} />
                    )))}
                </ul>
            </Row>
        );
    } else {
        result = <></>;
    }


    return result;
}