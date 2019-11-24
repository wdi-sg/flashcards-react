import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

const cards = [
  {
    question: 'What is 2+2?',
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

console.log("HEHEHEH", cards[0].question);

class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
      title: cards[0].question

    };
  }

  clickHandler() {

    this.setState({ clicked: !this.state.clicked, title: cards[0].answer })

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
        <p onClick={() => { this.clickHandler() }} className={display} > {this.state.title}</p>
      </div>
    );
  }
}

export default Form;
