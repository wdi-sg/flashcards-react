import React from 'react';
import { hot } from 'react-hot-loader';

import Card from '../client/components/card/card';
import Button from '../client/components/button/button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showAnswer: false,
      cardNumber: 0
    }
  }

  buttonClickedHandler() {
    this.setState({showAnswer: !this.state.showAnswer});
  }

  render() {

    const content = [
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
    ];
    
    return (
      <div>
        Flash Cards
        <Card content={content} showAnswer={this.state.showAnswer} cardNumber={this.state.cardNumber}/>
        <Button buttonText="Show Answer" clicked={()=>{this.buttonClickedHandler()}}/>
      </div>
    );
  }
}

export default hot(module)(App);
