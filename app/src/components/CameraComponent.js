import React from 'react';
import Webcam from "react-webcam";

export default function Webcam() {
    const videoConstraints =  {
        width: 1280,
        height: 720
    }

    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
      
        const capture = React.useCallback(
          () => {
            const imageSrc = webcamRef.current.getScreenshot();
          },
          [webcamRef]
        );
      
        return (
          <>
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
          </>
        );
      };
}