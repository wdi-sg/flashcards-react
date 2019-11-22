import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Input from './components/input/input';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        cards: [
        {
            question: "I want it all.",
            answer: "I want it now",
        },
        {
            question: 'We will we will',
            answer: "Rock you",
        },
        {
            question: "She's a killer queen",
            answer: 'Gunpowder and Gelatine',
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Form cards={this.state.cards}/>
        <Input cards={this.state.cards}/>
        Welcome.
      </div>
    );
  }
}

export default hot(module)(App);