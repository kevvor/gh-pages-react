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
        const bubbleTexts = [
            "Hey there! \u{1F44B}",
            "My name is Keano. Nice to meet you.",
            "I'm a web developer based in Vancouver, Canada.",
            "I mostly work with Javascript and front end web frameworks, but feel free to reach out to me about other projects!",
            "Have a look at some of my previous work, or contact me to chat with me!",
            "See ya around \u{1F642}"
        ]

        bubbleTexts.forEach((msg, i) => {
            try {
                const timer = (i + 1.3) * 1500;
                setTimeout(async () => {
                    const { allTexts } = this.state;
                    const _allTexts = [].concat(allTexts, bubbleTexts[i]);


                    this.setState({ allTexts: _allTexts, currentText: msg });
                    window.scrollTo(0, document.body.scrollHeight);

                    // this.DOMtextTone.play();
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
                    <source src={textTone} type="audio/mpeg" >
                    </source>
                </audio>
            </div>
        );
    }
}

export default App;
