import React from 'react';
import "../css/HelpView.css";
import MainButtons from "../img/main_buttons.png";


export default function HelpView(props) {
    return(
        <div className="helper">
            <h1 className="mt-5 header1">Help</h1>
            <div className="helpContent">
                <h2>Start using LSE Transcriber</h2>
                <p>
                    First of all, you need to give us permissions to use your webcam. This will be the feed that will be used for predicting your signs. Once
                    you can see yourself on the center of the main page, you will need to start recording your signs.
                </p>
                <p>
                    For that, there are some important buttons on the center of the page. I will describe their functionality based on their number.
                    <img src={MainButtons} alt="Buttons of the main page" className="mainButtons"/>

                </p>
                <p className="mt-5">
                    <b>1.Start/Stop:</b> Pressing this button will alternate the recording. While you are recording, every two seconds a screenshot is taken from your webcam, so have the sign ready
                    by then!
                </p>
                <p>
                    <b>2. Remove:</b> This button will remove the hole prediction, in the case you want to start a new one
                </p>
                <p>
                    <b>3. Read:</b> Pressing this button will read out loud the actual prediction, in spanish.
                </p>
                <p>
                    <b>4. Timer:</b> This element is a timer that would help you know how much time you have until the next screenshot. The timer only appears on screen when you are recording.
                </p>
                <p>
                    <b>5. Question mark:</b> If you hover this question mark, you will be prompted with every sign recognisable by LSE Transcriber. Just in case you forget them!
                </p>
            </div>
            <div className="margin-bottom">a</div>
        </div>
    ); 
}