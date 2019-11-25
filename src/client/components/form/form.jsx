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
      clicked:false,
      cardNo: 0,
      backClick: false,
      frontClick: false
    };
  }

  clickLeftHandler() {
    const{clicked,cardNo} = this.state;
    if (cardNo > 0){
        this.setState({cardNo: cardNo - 1 })
    }

    if (clicked === true) {
        this.setState({clicked: !clicked})
    }
  }

  clickRightHandler() {
    const{clicked,cardNo} = this.state;
    if (cardNo < cards.length - 1){
        this.setState({cardNo: cardNo +1 })
    }

    if (clicked === true) {
        this.setState({clicked: !clicked})
    }
  }


  clickHandler(){

    this.setState({clicked:!this.state.clicked})
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
      <div className="container-fluid">
        <p className={display}>{this.state.clicked ? cards[this.state.cardNo].answer : cards[this.state.cardNo].question}</p>
        <button className="previous" onClick={()=>{this.clickLeftHandler()}}>Previous</button>
        <button className= "next" onClick={()=>{this.clickRightHandler()}}>Next</button>
        <br/>
        <button onClick={()=>{this.clickHandler()}}>{this.state.clicked ? "Question" : "See Answer"}</button>

      </div>
    );
  }
}

export default Form;