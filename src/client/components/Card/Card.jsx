import React from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

class Card extends React.Component {
    render() {
        let {question,answer} = this.props.card
        return (this.props.state.showQuestion ? <Question checkAnswer={()=>this.props.checkAnswer()} changeAnswer={(value)=>{this.props.changeAnswer(value)}} flipCard={()=>{this.props.flipCard()}} question={question}/> : <Answer flipCard={()=>{this.props.flipCard()}} answer={answer}/>)
    }
}

export default Card;