import React, {  useState } from 'react';
import { Card,  makeStyles, Fab, Input, Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../redux/slices/predictionSlice/predictionSlice";
import { Row, Col } from 'react-bootstrap';
import "../css/PredictionView.css";
import SendIcon from "@material-ui/icons/Send"
import Webcam from "react-webcam"
import Predictions from "./Predictions.js"

const useStyles = makeStyles({
    root: {
        display: "inline-block",
        height: "auto",
        width: "auto",
        padding: "2em",
        borderRadius: "25px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(11px)",
        overflow: "visible",
        marginBottom: "5em",
        marginTop: "10%",
    },
    input: {
        color: "white",
        background: "rgba(0,0,0,0.5)"
    },
    button: {
        width: "6em",
        height: "3em",
        marginBottom:"2em",
        marginTop: "3em",
    }
})

export default function PredictionVirew(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(null);
    const predictionError = useSelector((state) => state.predictions.error);
    const videoConstraints =  {
        width: 1280,
        height: 720,
        facingMode: "user"
    }
    const webcamRef = React.useRef(null);

    const capture = () => {
            const img = webcamRef.current.getScreenshot();
            setPhoto(img);

            dispatch(fetchPrediction(img));
    }

    if(predictionError !== null)
        console.log(predictionError);

    return (
        <Card className={classes.root}>
            <Row>
                <Col>
                    <div className="mt-4 blurDiv">
                        <Row>
                            <Col>
                            <Webcam
                                audio={false}
                                height={400}
                                ref={webcamRef}
                                screenshotFormat="image/png"
                                width={880}
                                videoConstraints={videoConstraints}
                            />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {photo !== null &&
                                    <img className="picture" alt="location uploaded" src={photo} />
                                }
                            </Col>
                        </Row>
                    </div>

                    <div className="fabcontainer">
                        <Fab color="primary" aria-label="send" onClick={capture}>
                            <SendIcon />
                        </Fab>
                    </div>
                </Col>
                <Row>
                    <Predictions />
                </Row>  
            </Row>
        </Card>
    );
}
