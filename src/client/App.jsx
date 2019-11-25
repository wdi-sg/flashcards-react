import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';

class App extends React.Component {

    constructor(){
    super();

    this.state = {
        words:"",
        counter: 0
    };

    let i = -1;

    const cards = [
    {
        question: 'What is this',
        answer: 'whatever'
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
  }





  nextHandler(){
    this.i ++;
    console.log("i :", i);
    this.setState({counter: i});
    this.setState({words:cards[i]});
    console.log(this.state.words);
  }

  render() {
    return (
      <div>
        <Form nextHandler= {this.nextHandler}/>
        <h2>{this.state.counter + 1}</h2><br/>
        <div className="qn">
        <h2>{this.state.words.question}</h2><br/>
        <h2>{this.state.words.answer}</h2>
        </div>
        <button onClick={()=>{this.nextHandler()}}>NEXT</button>

      </div>
    );
  }
}




export default hot(module)(App);