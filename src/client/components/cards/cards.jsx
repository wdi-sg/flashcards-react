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
    question: 'Capital of Malaysia',
    answer: 'Kuala Lumpur'
  },
  {
    question: 'Kilometers in a mile',
    answer: 1.6
  },
];

class Cards extends React.Component {

  constructor(){
    super();
    this.state = {
      index: 0,  // to show which card
      show: false
    }
  }

  previousCard(){
    if (this.state.index > 0) {
      let previous = this.state.index - 1
      this.setState({index: previous})
    } else {
      alert("This is the first card.")
    }
  }

  nextCard(){
    if (this.state.index < cards.length-1) {
      let next = this.state.index + 1
      this.setState({index: next})
    } else {
      alert("This is the last card.")
    }
  }

  showAnswer(){
    this.setState({show:!this.state.show})
  }

  render() {

    // calling cx sets all the styles on the element in the display variable
    const answer = cx(
      styles.hide, // styles that never change
      { // dynamic styles
        [styles.show]: this.state.show // make the key the style name, and the value the dynamic boolean
      }
    )

    return (
      <div>
        <div class="question">
          <h3>{cards[this.state.index].question}</h3>
          <button onClick={()=>{this.previousCard()}}>Previous Card</button>
          <button onClick={()=>{this.nextCard()}}>Next Card</button>
        </div>
        <div className={answer}>
          <p>{cards[this.state.index].answer}</p>
        </div>
        <button onClick={()=>{this.showAnswer()}}>Show Answer</button>
      </div>
    );
  }
}

export default Cards;