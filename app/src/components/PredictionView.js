import React, { useEffect, useState } from 'react';
import { Card, Input, makeStyles, Button, Fab } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchPrediction } from "../redux/slices/predictionSlice/predictionSlice";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
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
    const [photoURL, setPhotoURL] = useState(null);
    const predictionStatus = useSelector((state) => state.predictions.status);
    const predictionError = useSelector((state) => state.predictions.error);
    const prediction = useSelector((state) => state.predictions.prediction);
    const videoConstraints =  {
        width: 1280,
        height: 720,
        facingMode: "user"
    }
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const img = webcamRef.current.getScreenshot();
            setPhoto(img);
            console.log(img)
        }
    )

    console.log(predictionError);

    const onClick = (e) => {
        //dispatch(fetchPrediction(photo));
        capture();
        console.log("a");
    }

    function uploadPhoto(event) {
        setPhoto(event.target.files[0]);
        setPhotoURL(URL.createObjectURL(event.target.files[0]));
    }
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
                                mirrored={true}
                                width={880}
                                videoConstraints={videoConstraints}
                            />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                {photo !== null &&
                                    <img className="picture" alt="location uploaded" src={photoURL} />
                                }
                            </Col>
                        </Row>
                    </div>

                    <div className="fabcontainer">
                        <Fab color="primary" aria-label="send" onClick={onClick}>
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
