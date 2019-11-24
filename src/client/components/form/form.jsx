import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Form extends React.Component {

  constructor(){
    super();

    this.state = {
        cards: [
          {
            question: '2+2',
            answer: 4
          },
          {
            question: 'capital of Malaysia',
            answer: 'Kuala Lumpur'
          },
          {
            question: 'Kilometers in a mile',
            answer: 1.6
          },
        ],
        index: 0,
        showQuestion: false,
        showAnswer: false
    };
  }

  clickNext() {
    console.log("Next Question is clicked");

    if(this.state.index === this.state.cards.length - 1) {
        console.log("Last question lo!");
    } else {
        this.setState({index: this.state.index + 1, showAnswer: false});
    }
  }

  clickAnswer() {
    console.log("Show Answer is clicked");

    // var currentIndex = this.state.index;
    // console.log("To show answer for question number: " + currentIndex);

    // var showAnswer = this.state.cards[currentIndex].answer;
    // console.log("The answer is: " + showAnswer);

    this.setState({showAnswer: true});
  }

  render() {
    var currentIndex = this.state.index;
    console.log("Current Index: " + currentIndex);

    if(this.props.startCard === false) {
        var showQuestion = styles.hideQuestion;
    } else {
        var showQuestion = styles.showQuestion;
    }

    if(this.state.showAnswer === true) {
        var showAnswer = styles.showAnswer;
    } else {
        var showAnswer = styles.hideAnswer;
    }

    return (
        <div>
          <div className={showQuestion}>
            <p>Question: {this.state.cards[currentIndex].question}</p>
            <button onClick={() => this.clickNext()}>Next Question</button>
            <button onClick={() => this.clickAnswer()}>Show Answer</button>
          </div>
          <p className={showAnswer}>Answer: {this.state.cards[currentIndex].answer}</p>
      </div>
    );
  }
}

export default Form;
