import React from 'react';
import './TextBubble.css';

const TextBubble = (props) => {
    return (
        <div className="bubble">
            <div className="text">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default TextBubble;
