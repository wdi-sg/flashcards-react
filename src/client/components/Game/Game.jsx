import React from 'react';
import styles from './style.scss';
import Card from '../Card/Card';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            questionNum: 0
        };
    }

    previousQuestion() {
        this.setState({questionNum: this.state.questionNum - 1,showQuestion: true})
    }

    nextQuestion() {
        this.setState({questionNum: this.state.questionNum + 1,showQuestion: true})
    }

    questionChoice(index) {
        const cards = [
            {question: '2+2',answer: 4},
            {question: 'capital of Malaysia',answer: 'Kuala Lumpur'},
            {question: 'Kilometers in a mile',answer: 1.6},
        ]
        return cards[index]
    }

    render() {
        return (<div className={styles.game}>
            <button onClick={()=>{this.previousQuestion()}}>Previous</button>
            <Card state={this.state} card={this.questionChoice(this.state.questionNum)}/>
            <button onClick={()=>{this.nextQuestion()}}>Next</button>
        </div>);
    }
}

export default Game;