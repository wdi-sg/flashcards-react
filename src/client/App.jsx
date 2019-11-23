import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Input from './components/input/input';
import NewQns from './components/newQns/newQns';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        currentAnswer: '',
        cardIndex: 0,
        cards: [
            {
                question: "Undefined.",
                answer: "Banana",
                correct: ""
            },
        ],
        answeredCards:[],
    }
  }

  store(question, answer, correct){
    var newObj = {question, answer, correct}
    console.log("New question added: ",newObj)
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
    this.setState({cardIndex: state});
  }

  answer(text){
    if(text === "Correct"){
        console.log("WOW SMART");
        var card = this.state.cards.splice(this.state.cardIndex,1)
        console.log("The card that was just answered: ",card)
        this.setState({currentAnswer: text, answeredCards: [...this.state.answeredCards,{...card}]});
        console.log("List of cards answered: ",this.state.answeredCards)
    } else if (text === "Wrong"){
        console.log("Try again")
    }

  }

  render() {
    return (
      <div>
        <Form currentAnswer={this.state.currentAnswer} cards={this.state.cards} cardIndex={this.state.cardIndex} nextQns={()=>{this.nextQns()}} prvQns={()=>{this.prvQns()}}/>
        <Input cards={this.state.cards} cardIndex={this.state.cardIndex} answer={(text)=>{this.answer(text)}}/>
        <NewQns store={(question, answer,correct)=>{this.store(question,answer,correct)}}/>
      </div>
    );
  }
}

export default hot(module)(App);