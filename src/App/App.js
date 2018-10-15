import React, { Component } from 'react';
import TextBubble from '../TextBubble/TextBubble';
import textTone from '../assets/text-tone.mp3';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allTexts: [],
            currentText: '',
            textVisible: false
        }
    }

    componentDidMount() {
        if (!this.state.textVisible) {
            // Figure out a better way to do this than simply hiding everything before it scrolls down to the bottom
            this.setState({ textVisible: true });
        }

        this.loadTextBubbles();
    }

    loadTextBubbles = () => {
        const prevWorkLink = '<a href="#">previous work</a>';

        const contactMeLink = '<a href="#">contact me</a>';

        const bubbleTexts = [
            "Hey there! My name is Keano, nice to meet you. \u{1F44B}",
            "I'm a web developer based in Vancouver, Canada.",
            "I mostly work with front end Javasript frameworks and Node.js, but I love new challenges so don't hesitate to reach about other projects!",
            "You can find some of my previous work here.",
            "Or send me an email to chat with me. \u{1F642}"
        ]

        bubbleTexts.forEach((msg, i) => {
            try {
                const timer = (i + 1.3) * 1500;
                setTimeout(() => {
                    const { allTexts } = this.state;
                    const _allTexts = [].concat(allTexts, bubbleTexts[i]);


                    this.DOMtextTone.play();
                    this.setState({ allTexts: _allTexts, currentText: msg });
                    window.scrollTo(0, document.body.scrollHeight);

                }, timer);
            } catch (error) {
                console.log(error);
            }
        });
    }

    render() {
        // TODO React router this thing
        const bubbles = this.state.allTexts.map((text, index) => {
            return (
                <TextBubble className={`text-${index}`} message={text} key={index} />
            )
        });

        return (
            <div className="app">
                <div id="divider"></div>
                {this.state.textVisible ?
                    <div>
                        <div className="text-bubble-container">
                            { bubbles }
                        </div>
                    </div>
                : null }
                <audio ref={ (textTone) => { this.DOMtextTone = textTone } }>
                    <source src={textTone} type="audio/mpeg" ></source>
                </audio>
            </div>
        );
    }
}

export default App;
