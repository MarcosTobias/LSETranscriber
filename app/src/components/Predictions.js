import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function Predictions() {
    //const prediction = useSelector(state => state.predictions.prediction)
    const prediction = ['a','b'];

    let result;

    if(prediction !=  []) {
        result = (
            <Row>
                <Col>
                    <div>{prediction}</div>         
                </Col>
                <Col>
                    <button>Read</button>
                </Col>
            </Row>
        );
    } else {
        result = <></>;
    }


    return result;
}