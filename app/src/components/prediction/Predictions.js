import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSpeechSynthesis } from "react-speech-kit";
import { removePrediction, switchRecording } from "../../redux/slices/predictionSlice/predictionSlice";
import LetterButton from './LetterButton';
import "../../css/Predictions.css";

export default function Predictions() {
    const prediction = useSelector(state => state.predictions.prediction);
    const { speak, voices } = useSpeechSynthesis();
    const dispatch = useDispatch();

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

    result = (
        <Row>
            <Col className="mb-5">
                    <button className="btn-gradient" onClick={onClick} disabled={prediction.length === 0}>Read</button>
                    <button className="btn-gradient" onClick={onClickRemove} disabled={prediction.length === 0}>Remove</button>
                    <button className="btn-gradient" onClick={onClickRecord}>Start/stop</button>
            </Col>
            <ul>
                {prediction.map(((item, index) => (
                    <LetterButton content={item} index={index} key={index} />
                )))}
            </ul>
        </Row>
    );

    return result;
}