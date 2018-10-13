import React, { Component } from 'react';
import './TextBubble.css';

class TextBubble extends Component {
    render() {
        return (
            <div className="bubble">
                <div className="text">
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default TextBubble;
