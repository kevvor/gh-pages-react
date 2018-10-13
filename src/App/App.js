import React, { Component } from 'react';
import TextBubble from '../TextBubble/TextBubble';
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
            const timer = (i + 1) * 1500;
            setTimeout(() => {
                const { allTexts } = this.state;
                const _allTexts = [].concat(allTexts, bubbleTexts[i]);
                this.setState({ allTexts: _allTexts, currentText: msg });
                window.scrollTo(0, document.body.scrollHeight);
            }, timer);
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
            <div className="App">
            <div id="rest-of-app"></div>
                {this.state.textVisible ?
                    <div>
                        <div className="text-bubble-container">
                            { bubbles }
                        </div>
                    </div>
                : null }
            </div>
        );
    }
}

export default App;
