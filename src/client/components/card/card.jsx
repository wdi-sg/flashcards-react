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


class Card extends React.Component {

  constructor(){
    super();

    this.state = {
        clicked:false,
        clickCounter:0,
        message:""
    };

    this.clickHandler = this.clickHandler.bind(this)
    this.clickNext = this.clickNext.bind(this)
    this.clickPrevious = this.clickPrevious.bind(this)
  }



  clickHandler(){

    this.setState({clicked:!this.state.clicked})
  }


  clickNext(){

    if (this.state.clickCounter < cards.length-1){
    this.setState({clickCounter: this.state.clickCounter+1, message:"", clicked:false})} else {
        this.setState({message: "Sorry, this is the last card"})
    }
  }


  clickPrevious(){

    if (this.state.clickCounter > 0){
    this.setState({clickCounter: this.state.clickCounter-1, message:"", clicked:false})} else {
    this.setState({message: "No more previous cards"})
    }
  }

  render() {


    // calling cx sets all the styles on the element in the display variable
    let display = null
    let show = null


    if (this.state.clicked === false){
        display = cards.question
        show = "Show answer"
    } else {
        display = cards.answer
        show = "Show question"
    }



    const front = cx(
      styles.visible,
      // styles that never change
      { // dynamic styles
        [styles.hidden]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )

     const back = cx(
      styles.visible,
      // styles that never change
      { // dynamic styles
        [styles.hidden]: !this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )



    let cardInfo = cards.map(card => {return {card}.card})

    let index = this.state.clickCounter

    return (
      <div>

      <div className = "jumbotron">
        <div className = {front}>Question: {cardInfo[index].question} </div>
        <div className = {back}>Answer: {cardInfo[index].answer}</div>
        </div>

        <button onClick={this.clickHandler}>{show}</button>
        <br/>

        <button onClick={this.clickPrevious}>Previous Card</button>

        <button onClick={this.clickNext}>Next Card</button>

         {this.state.message ===""? null:<p className="alert alert-danger" >{this.state.message}</p>}

      </div>
    );
  }
}

export default Card;