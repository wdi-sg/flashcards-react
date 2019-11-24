import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





const cx = classnames.bind(styles)

const cards = [
  {
    question: 'What is 2+2?',
    answer: 4 + " Quick MAFFFS"
  },
  {
    question: 'capital of Malaysia',
    answer: 'Kuala Lumpur'
  },
  {
    question: 'Kilometers in a mile',
    answer: 1.6
  },
  {
    question: 'What is the capital of France?',
    answer: "Paris"
  },
];


class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
      cardNum: 0,
      answer: ""

    };
  }


  clickAnswer() {
    this.setState({ clicked: !this.state.clicked, answer: cards[this.state.cardNum].answer })

  }

  clickForward() {
    // moving on to next card..
    if (this.state.cardNum < (cards.length - 1)) {
      this.setState({ clicked: !this.state.clicked, cardNum: this.state.cardNum + 1, answer: "" })
    }
  }

  clickBackward() {
    if (this.state.cardNum > 0) {
      this.setState({ clicked: !this.state.clicked, cardNum: this.state.cardNum - 1, answer: "" })
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
    // seeing card number
    console.log("card num is", this.state.cardNum)


    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom className={display} > Question: {cards[this.state.cardNum].question}</Typography>
          <Typography variant="body2" component="p" className={display}>Answer: {this.state.answer}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => (this.clickAnswer())}>Show Answer</Button>
          <Button size="small" color="primary" onClick={() => { this.clickForward() }}>Next Question</Button>
          <Button size="small" color="primary" onClick={() => { this.clickBackward() }}>Previous Question</Button>
        </CardActions>
      </Card>
    );
  }

}

export default Form;
