import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Input from './components/input/input';
import NewQns from './components/newQns/newQns';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        cardIndex: 0,
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

  store(question, answer){
    console.log(question + " HELLO " + answer)
    var newObj = {question, answer}
    console.log(this.state.cards)
    this.setState({cards: [...this.state.cards,{...newObj}]})
  }

  nextQns(){
    var state = this.state.cardIndex + 1;
    if (state === this.state.cards.length){
        state = 0;
    }
    this.setState({cardIndex: state})
  }

  prvQns(){
    console.log(this.state.cardIndex);
    var state = this.state.cardIndex - 1;
    if (state === -1){
        state = this.state.cards.length - 1;
    }
    this.setState({cardIndex: state})
  }

  render() {
    return (
      <div>
        <Form cards={this.state.cards} cardIndex={this.state.cardIndex} nextQns={()=>{this.nextQns()}} prvQns={()=>{this.prvQns()}}/>
        <Input cards={this.state.cards}/>
        <NewQns store={(question, answer)=>{this.store(question,answer)}}/>
        Welcome.
      </div>
    );
  }
}

export default hot(module)(App);