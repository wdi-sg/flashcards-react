import React from 'react';
import { hot } from 'react-hot-loader';

import Card from '../client/components/card/card';
import Button from '../client/components/button/button';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showAnswer: false
    }
  }

  buttonClickedHandler() {
    this.setState({showAnswer: !this.state.showAnswer});
  }

  render() {
    return (
      <div>
        Flash Cards
        <Card question="how are you?" answer="I'm good" showAnswer={this.state.showAnswer}/>
        <Button buttonText="Show Answer" clicked={()=>{this.buttonClickedHandler()}}/>
      </div>
    );
  }
}

export default hot(module)(App);
