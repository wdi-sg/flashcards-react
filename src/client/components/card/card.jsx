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
  {
    question: 'Stars in the Singaporean flag',
    answer: 5
  },
  {
    question: 'capital of Taiwan',
    answer: 'Taipei'
  },
  {
    question: 'how many fingers per hand?',
    answer: 5
  }
];

class Card extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false,
      cardNum: 0,
      answer: "",
      know:false
    };
  }

  buttonAnswer() {
    this.setState( { clicked: !this.state.clicked, answer: cards[this.state.cardNum].answer})
    console.log(this.state.clicked);
  }

  buttonNext() {
    this.setState( { clicked: false, cardNum: this.state.cardNum+1 , answer: ""})
  }

  buttonBack() {
    this.setState( { clicked: false, cardNum: this.state.cardNum-1 , answer: ""})
  }

  buttonKnow() {
    this.setState( { know: !this.state.know})
  }
  
  render() {

    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      { // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )

    console.log("Card Number: " + this.state.cardNum);

    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <button onClick={()=>{this.buttonBack()}} style={{borderRadius:"500px", width:"50px", height:"50px", backgroundImage:"url(https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/back-512.png)", backgroundSize:"contain"}}></button>
          </div>

          <div className="col-8" style={{padding: "0"}}>
            <div style={{backgroundColor: "grey", height: "300px", paddingTop:"50px"}}>
              <p style={{color: "white", fontSize: "20px"}}> Question: {cards[this.state.cardNum].question}</p>
              <p className={display}> Answer: {cards[this.state.cardNum].answer}</p>
              <button onClick={()=>{this.buttonAnswer()}} style={{position: "absolute", right: "0", bottom: "30px", width:"200px", marginBottom:"0"}}>Show Answer</button>
              <button onClick={()=>{this.buttonKnow()}} style={{position: "absolute", right: "0", bottom: "0", width:"200px"}}>Know?</button>
            </div>
          </div>
            
          <div className="col-2">
            <button onClick={()=>{this.buttonNext()}} style={{borderRadius:"500px", width:"50px", height:"50px", backgroundImage:"url(https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/next-512.png)", backgroundSize:"contain"}}></button>
          </div>
            
        </div>
      </div>
    );
  }
}

export default Card;
