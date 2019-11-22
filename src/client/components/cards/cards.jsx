import React from 'react';

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

class Cards extends React.Component {

  constructor(){
    super();
  }

  clickHandler(){

    this.setState({clicked:!this.state.clicked})
  }

  render() {

    const question = cards.map((card)=>{
      return <h3>{card.question}</h3>
    })

    return (
      <div>
        {question}
        <button onClick={()=>{this.clickHandler()}}>click to change</button>
      </div>
    );
  }
}

export default Cards;