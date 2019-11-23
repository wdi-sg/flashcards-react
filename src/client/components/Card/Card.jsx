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

    let firstQn = cards[0].question;
    let firstAns = cards[0].answer;

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

    const answer = cx(
      styles.ansHide,
        {
           [styles.ansReveal]: this.state.showAns
        }
    )

    const question = cx(
        styles.qn
    )

    return (
      <div>
        <div className={display}>
            <p className={question}>{firstQn}</p>
            <p className={answer}>{firstAns}</p>
        </div>
        <button onClick={()=>{this.checkHandler()}}>Check</button>

      </div>
    );
  }
}

export default Card;