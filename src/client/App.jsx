import React from 'react';
import { hot } from 'react-hot-loader';

import Card from './components/Card/Card';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      question: 0,
      answer: 0
    }
  }

   checkHandler(){


  }

  render() {
    return (
      <div>
        <Card />
        <button onClick={()=>{this.checkHandler()}}>Check</button>
        <button onClick={()=>{this.clickHandler()}}>Next Card</button>
      </div>
    );
  }
}

export default hot(module)(App);