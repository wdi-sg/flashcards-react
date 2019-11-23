import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
const cx = classnames.bind(styles)

class Card extends React.Component {

  constructor(){
    super();
    this.state = {
      cardNum: 0,
      showAns: false
    }
  }

  checkHandler(){
    this.setState({showAns: !this.state.showAns})
  }

  nextHandler(){
    //let newCardNum = {this.state.cardNum} + 1;
    this.setState({cardNum: this.state.cardNum + 1});
    console.log("from nextHandler: ", this.cardNum);
    this.setState({showAns: !this.state.showAns})
  }

  render() {
    const cards = [
      {
        question: 'Poisson',
        answer: 'Fish'
      },
      {
        question: 'Poulet',
        answer: 'Chicken'
      },
      {
        question: 'Pomme',
        answer: 'Apple'
      },
    ];
    console.log(cards);

    let questionCard = cards[this.state.cardNum].question;
    let answerCard = cards[this.state.cardNum].answer;

    // const showQuestion = cards.map((eachCard, index) => {
    //     return ( <p key={index}>{eachCard.question}</p> )
    // });

    // const showAnswer = cards.map((eachCard, index) => {
    //     return ( <p key={index}>{eachCard.answer}</p> )
    // });

    const display = cx(
      styles.myclass,
      // {
      //   [styles.clicked]: this.state.clicked
      // }
    )

    const answerStyle = cx(
      styles.ansHide,
        {
           [styles.ansReveal]: this.state.showAns
        }
    )

    const questionStyle = cx(
        styles.qn
    )

    return (
      <div>
        <div className={display}>
            <p className={questionStyle}>{questionCard}</p>
            <p className={answerStyle}>{answerCard}</p>
        </div>
        <button onClick={()=>{this.checkHandler()}}>Check</button>
        <button onClick={()=>{this.nextHandler()}}>Next Card</button>
      </div>
    );
  }
}

export default Card;