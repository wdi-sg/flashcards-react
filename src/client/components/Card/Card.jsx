import React from 'react';
import styles from './style.scss';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
        };
    }

    render() {
        let {question,answer} = this.props.card
        return (<div>
            <Question question={question}/>
            <Answer answer={answer}/>
        </div>);
    }
}

export default Card;