import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import DontKnows from './../dontknow/dontknow';

const cx = classnames.bind(styles)

const cards = [
  {
    question: '2+2',
    answer: 4
  },
  {
    question: 'Capital of Malaysia',
    answer: 'Kuala Lumpur'
  },
  {
    question: 'Kilometers in a mile',
    answer: 1.6
  },
];

class Cards extends React.Component {

  constructor(){
    super();
    this.state = {
      index: 0,  // to show which card
      qns: false,
      ans: false,
      button: "Show Anwser"
    }
  }

  previousCard(){
    if (this.state.index > 0) {
      let previous = this.state.index - 1
      this.setState({index: previous})
    } else {
      alert("This is the first card.")
    }
  }

  nextCard(){
    if (this.state.index < cards.length-1) {
      let next = this.state.index + 1
      this.setState({index: next})
    } else {
      alert("This is the last card.")
    }
  }

  showAnswer(){
    this.setState({qns:!this.state.qns})
    this.setState({ans:!this.state.ans})
    if (this.state.button.includes("Show")) {
      this.setState({button: "Hide Answer"})
    } else {
      this.setState({button: "Show Answer"})
    }
  }

  render() {

    // calling cx sets all the styles on the element in the display variable
    const question = cx(
      styles.showQns, // show question
      { // dynamic styles
        [styles.hide]: this.state.qns // hide question
      }
    )

    const answer = cx(
      styles.hide, // hide answer
      { // dynamic styles
        [styles.showAns]: this.state.ans // show answer
      }
    )

    return (
      <div>
        <button onClick={()=>{this.previousCard()}}>Previous Card</button>
        <button onClick={()=>{this.nextCard()}}>Next Card</button>
        <div class={question}>
          <p>{cards[this.state.index].question}</p>
        </div>
        <div className={answer}>
          <p>{cards[this.state.index].answer}</p>
        </div>
        <button onClick={()=>{this.showAnswer()}}>{this.state.button}</button>
        <DontKnows card={cards[this.state.index]} />
      </div>
    );
  }
}

export default Cards;