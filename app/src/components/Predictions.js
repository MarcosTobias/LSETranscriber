import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSpeechSynthesis } from "react-speech-kit";
import { addSpace, removePrediction, switchRecording } from "../redux/slices/predictionSlice/predictionSlice";
import LetterButton2 from './LetterButton2';

export default function Predictions() {
    const prediction = useSelector(state => state.predictions.prediction)
    const { speak, voices } = useSpeechSynthesis();
    const dispatch = useDispatch();

    console.log(prediction);

    const onClick = () => { 
        const text = prediction.join('');
        speak({ text: text, voice: voices[7] });
    }

    const onClickSpace = () => {
        dispatch(addSpace());
    }

    const onClickRemove = () => {
        dispatch(removePrediction());
    }

    const onClickRecord = () => {
        dispatch(switchRecording());

    }

    let result;

    if(prediction !==  []) {
        result = (
            <Row>
                <Col>
                    <button onClick={onClick}>Read</button>
                    <button onClick={onClickSpace}>Space</button>
                    <button onClick={onClickRemove}>Remove</button>
                    <button onClick={onClickRecord}>Start/stop</button>
                </Col>
                <br></br>
                <ul>
                    {prediction.map(((item, index) => (
                        <LetterButton2 content={item} index={index} key={index} />
                    )))}
                </ul>
            </Row>
        );
    } else {
        result = <></>;
    }


    return result;
}