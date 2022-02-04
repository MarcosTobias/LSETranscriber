import React from 'react';
import { useDispatch } from 'react-redux';
import "../css/LetterButton2.css"
import { removeLetter } from "../redux/slices/predictionSlice/predictionSlice"


export default function LetterButton2(props) {
    const dispatch = useDispatch();

    const click = () => {
        dispatch(removeLetter(props.index));    
        console.log(props.index);
    }

    if (props.content === " ") {
        return (
            <>
                <button className='btn2 btn-letter2 text-black2' color="primary" onClick={click}>A</button>
            </>
        );
    } else {
        return (
            <>
                <button className='btn2 btn-letter2' color="primary" onClick={click}>{props.content}</button>
            </>
        );
    }
}