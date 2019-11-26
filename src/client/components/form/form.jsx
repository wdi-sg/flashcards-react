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
  }
];


class Form extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false,
      cardNo: 0
    };
  }

  clickLeft() {
    let { cardNo } = this.state;
    if (cardNo > 0)
      this.setState({ clicked: !this.state.clicked, cardNo: cardNo - 1 });
  }

  clickRight() {
    let { cardNo } = this.state;
    if (cardNo < cards.length - 1)
      this.setState({ clicked: !this.state.clicked, cardNo: cardNo + 1 });
  }

  flip() {
    let { clicked } = this.state;
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      {
        // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    );

    const { cardNo, clicked } = this.state;

    return (
      <div>
        <p className={display}>
          {clicked === false ? cards[cardNo].question : cards[cardNo].answer}
        </p>
        <button
          onClick={() => {
            this.clickleft();
          }}
        >
          left
        </button>

        <button
          onClick={() => {
            this.flip();
          }}
        >
          flip card!
        </button>

        <button
          onClick={() => {
            this.clickRight();
          }}
        >
          right
        </button>
      </div>
    );
  }
}

export default Form;
