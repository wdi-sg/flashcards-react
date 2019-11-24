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

  clickPrev() {
    console.log("Previous Question is clicked");

    if(this.state.index === 0) {
        console.log("First question lo!");
    } else {
        this.setState({index: this.state.index - 1, showAnswer: false});
    }
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
        var category = "Question";
        var card = this.state.cards[currentIndex].question;
    }

    if(this.state.showAnswer === true) {
        var showAnswer = styles.showAnswer;
        var category = "Answer";
        var card = this.state.cards[currentIndex].answer;
    } else {
        var showAnswer = styles.hideAnswer;
    }

    return (
        <div>
            <div className={styles.contentArea}>
                <div className={styles.col}>
                    <button onClick={() => this.clickPrev()} className={styles.prevQn}>&lt;</button>
                </div>

                <div className={styles.main}>
                    <div className={styles.category}>
                        <h3>{category}</h3>
                    </div>
                    <div className={styles.card}>
                        <h2>{card}</h2>
                    </div>
                    <div className={styles.bottomRow}>
                        <button onClick={() => this.clickAnswer()} className={styles.showAnswer}>Show Answer</button>
                    </div>
                </div>

                <div className={styles.col}>
                    <button onClick={() => this.clickNext()} className={styles.nxtQn}>&gt;</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Form;
