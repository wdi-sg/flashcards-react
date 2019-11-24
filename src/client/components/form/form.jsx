import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

const cards = [
  {
    question: 'What is 2+2?',
    answer: 4
  },
  {
    question: 'capital of Malaysia',
    answer: 'Kuala Lumpur'
  },
  {
    question: 'Kilometers in a mile',
    answer: 1.6 + "km in a mile"
  },
  {
    question: 'Who is the lead singer of Maroon 5',
    answer: "adam levine"
  },
];


class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
      cardCount: 0,
      answer: ""

    };
  }

  showAnswer() {
    this.setState({
      clicked: !this.state.clicked,
      answer: cards[this.state.cardCount].answer
    })

  }

  nextQns() {
    // moving on to next card..
    if (this.state.cardCount < (cards.length - 1)) {
      this.setState({
         clicked: !this.state.clicked,
         cardCount: this.state.cardCount + 1,
         answer: ""
        })
    }
  }


  render() {

    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      { // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )
    // seeing card number
    console.log("card num is", this.state.cardCount)

    return (
      <div>
        <p className={display} > Question: {cards[this.state.cardCount].question}</p>
        <p className={display}>Answer: {this.state.answer}</p>

        <button onClick={() => (this.showAnswer())}>Show Answer</button>
        <button onClick={() => { this.nextQns() }}>Next Question</button>
      </div>
    );
  }
}

export default Form;
