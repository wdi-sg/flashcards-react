import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
const cx = classnames.bind(styles)

class Card extends React.Component {

  constructor(){
    super();
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

    return (
      <div>
        <div className={display}>
        <h2>{firstQn}</h2>
        <h2>{firstAns}</h2>
        </div>


      </div>
    );
  }
}

export default Card;