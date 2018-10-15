import React from 'react';
import './TextBubble.css';

const TextBubble = (props) => {
    let isHrefBubble = false;
    const data = {
        p1: '',
        p2: '',
        aHref: '',
        aText: ''
    }

    if (props.message.includes("{{")) {
        const chunks = props.message.split(/\{\{(.*)\}\}/);

        data.p1 = chunks[0];
        data.p2 = chunks[2];
        data.aText = chunks[1].split('|')[0];
        data.aHref = chunks[1].split('|')[1];

        isHrefBubble = true;
    }

    const { p1, p2, aHref, aText } = data;

    return (
        <div className="bubble">
            <div className="text">
                {isHrefBubble ?
                    <p>{p1}<a href={aHref}>{aText}</a>{p2}</p> :
                    <p>{props.message}</p>}
            </div>
        </div>
    );
}

export default TextBubble;
