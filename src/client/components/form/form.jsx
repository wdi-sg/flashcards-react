import React from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';

import styles from './style.scss';

const cards = [
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

const cardsLength = cards.length -1;

const cx = classnames.bind(styles)

class Form extends React.Component {

  constructor(){
    super();

    this.state = {
      cardId: 0,
      answer: "",
      clicked:false

    };
  }

  clickForward(){
    console.log('clicked forward')
    console.log(this.state.cardId)
    if (this.state.cardId < cardsLength && this.state.cardId >= 0 ) {
    this.setState({cardId: this.state.cardId+1})
    this.setState({answer: ""})
    }
  }

  clickBackward(){
    console.log('clicked backward')
    console.log(this.state.cardId)
    if (this.state.cardId <= cardsLength && this.state.cardId > 0 ) {
    this.setState({cardId: this.state.cardId-1})
    this.setState({answer: ""})
    }
  }

  clickAnswer(){
    console.log('clicked answer')
    console.log(this.state.cardId)
    let cardId = this.state.cardId;
    console.log(cards[cardId].answer)
    this.setState({answer: cards[cardId].answer})
  }

  render() {

    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      { // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )

    return (
      <div>
        <p className={display}>Question: {cards[this.state.cardId].question}<br/>
        Answer: {this.state.answer}
        </p>
        <button onClick={()=>{this.clickAnswer()}}>Answer</button>
        <button onClick={()=>{this.clickBackward()}}>Previous</button>
        <button onClick={()=>{this.clickForward()}}>Next</button>
      </div>
    );
  }
}

export default Form;
