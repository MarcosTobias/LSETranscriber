import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSpeechSynthesis } from "react-speech-kit";
import { addSpace } from "../redux/slices/predictionSlice/predictionSlice";




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

    let result;

    if(prediction !==  []) {
        result = (
            <Row>
                <Col>
                    <div>{prediction}</div>         
                </Col>
                <Col>
                    <button onClick={onClick}>Read</button>
                    <button onClick={onClickSpace}>Space</button>
                </Col>
            </Row>
        );
    } else {
        result = <></>;
    }


    return result;
}