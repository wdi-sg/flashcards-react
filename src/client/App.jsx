import React from 'react';
import { hot } from 'react-hot-loader';

import Card from '../client/components/card/card';
import Button from '../client/components/button/button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showAnswer: false,
      cardNumber: 0,
      answerBtnText: "Show Answer",
      prevCardDisabled: true,
      nextCardDisabled: false,
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
      ]
    }
  }

  showAnswer() {

    let answerBtnText = this.state.answerBtnText;

    if (answerBtnText === "Show Answer") {
      answerBtnText = "Hide Answer";
    } else {
      answerBtnText = "Show Answer"
    }

    this.setState({
      showAnswer: !this.state.showAnswer,
      answerBtnText: answerBtnText
    });
  }

  nextCard() {
    let cardNumber = this.state.cardNumber;
    let cards = this.state.cards;

    if (cardNumber < cards.length - 1) {
      cardNumber++;
      this.setState({ cardNumber, prevCardDisabled: false });
    }

    if (cardNumber === cards.length - 1 ) {
      this.setState({nextCardDisabled: true });
    } 

  }

  prevCard() {
    let cardNumber = this.state.cardNumber;
    if (cardNumber > 0) {
      cardNumber--;
      this.setState({ cardNumber });
    }

    if (cardNumber === 0) {
      this.setState({ prevCardDisabled: true, nextCardDisabled: false});
    }
  }

  render() {

    return (
      <div>
        Flash Cards
        <Card cards={this.state.cards} showAnswer={this.state.showAnswer} cardNumber={this.state.cardNumber} />
        <Button buttonText={this.state.answerBtnText} clicked={() => { this.showAnswer() }} />
        <Button buttonText="Previous Card" clicked={() => { this.prevCard() }} disabled={this.state.prevCardDisabled}/>
        <Button buttonText="Next Card" clicked={() => { this.nextCard() }} disabled={this.state.nextCardDisabled} />
      </div>
    );
  }
}

export default hot(module)(App);
