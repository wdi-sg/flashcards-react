import React from 'react';
import styles from './style.scss';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            showQuestion: true
        };
    }

    flipCard() {
        this.setState({showQuestion: !this.state.showQuestion})
    }

    resetCard() {
        this.setState({showQuestion: true})
    }

    render() {
        let {question,answer} = this.props.card
        return (this.state.showQuestion ? <Question flipCard={()=>{this.flipCard()}} question={question}/> : <Answer flipCard={()=>{this.flipCard()}} answer={answer}/>)
    }
}

export default Card;