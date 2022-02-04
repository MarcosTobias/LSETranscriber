import React from 'react';
import "../css/LetterButton.css"


export default function LetterButton(props) {

    return (
        <>
            <a class="button" role="button">
                <span>remove</span>
                <div class="icon">
                    <i class="fa fa-remove"></i>
                    <i class="fa fa-check"></i>
                </div>
            </a>
        </>
    );
}