import React from 'react';
import styles from './style.scss';
import Card from '../Card/Card';

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            questionNum: 0,
            showQuestion: true,
            cards: [
                {question: '2+2',answer: 4},
                {question: 'capital of Malaysia',answer: 'Kuala Lumpur'},
                {question: 'Kilometers in a mile',answer: 1.6},
            ]
        };
    }

    previousQuestion() {
        this.setState({questionNum: this.state.questionNum - 1,showQuestion: true})
    }

    nextQuestion() {
        this.setState({questionNum: this.state.questionNum + 1,showQuestion: true})
    }

    flipCard() {
        this.setState({showQuestion: !this.state.showQuestion})
    }

    render() {
        return (<div className={styles.game}>
            <div className={styles.section}>
                <button onClick={()=>{this.previousQuestion()}}>Previous</button>
            </div>
            <div className={styles.section}>
                <Card state={this.state} card={this.state.cards[this.state.questionNum]} flipCard={()=>{this.flipCard()}}/>
            </div>
            <div className={styles.section}>
                <button onClick={()=>{this.nextQuestion()}}>Next</button>
            </div>
        </div>);
    }
}

export default Game;