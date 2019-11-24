import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

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
class Form extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked: false,
      cardNumber: 0
    };
  }

  clickLeftHandler(){
    const {clicked, cardNumber} = this.state;
    if (cardNumber > 0) {
      this.setState({cardNumber: cardNumber - 1});
    }
    if (clicked === true) {
      this.setState({clicked: !clicked});
    }
  }

  clickHandler(){
    const {clicked} = this.state;
    this.setState({clicked:!clicked});
  }

  clickRightHandler(){
    const {clicked, cardNumber} = this.state;
    if (cardNumber < cards.length - 1) {
      this.setState({cardNumber: cardNumber + 1});
    }
    if (clicked === true) {
      this.setState({clicked: !clicked});
    }
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
        <p className={display}>{this.state.clicked ? cards[this.state.cardNumber].answer : cards[this.state.cardNumber].question}</p>
        <button onClick={()=>{this.clickLeftHandler()}}>Previous</button>
        <button onClick={()=>{this.clickHandler()}}>{this.state.clicked ? "Question" : "Answer"}</button>
        <button onClick={()=>{this.clickRightHandler()}}>Next</button>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
