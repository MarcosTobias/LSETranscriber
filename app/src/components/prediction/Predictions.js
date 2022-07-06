import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSpeechSynthesis } from "react-speech-kit";
import { removePrediction, switchRecording } from "../../redux/slices/predictionSlice/predictionSlice";
import LetterButton from './LetterButton';
import "../../css/Predictions.css";
import { useTranslation } from 'react-i18next';

export default function Predictions() {
    const { t } = useTranslation();

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
                    <button className="btn-gradient" onClick={onClick} disabled={prediction.length === 0}>{t('predictions.read')}</button>
                    <button className="btn-gradient" onClick={onClickRemove} disabled={prediction.length === 0}>{t('predictions.remove')}</button>
                    <button className="btn-gradient" onClick={onClickRecord}>{t('predictions.start')}</button>
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