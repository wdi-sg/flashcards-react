import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Form extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false,
      currentAnswer: '',
    };
  }

  clickHandler(){

    this.setState({clicked:!this.state.clicked})
  }

  changeHandler(){
    console.log(event.target.value)
    // this.setState({question: event.target.value})
  }

  showAnswer(answer){
    console.log(answer)
    this.setState({currentAnswer: answer})
  }

  checkAnswer(answer){
    if(event.key === 'Enter'){
        if(event.target.value === answer){
            this.setState({currentAnswer: "Correct"})
        } else {
            this.setState({currentAnswer: "Wrong"})
        }
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

    const card = cx(
        styles.cardhide,
        {
            [styles.card]: (this.props.id === "Card2"),
        }
    )

    const displayCard = this.props.cards.map((x, index)=>{
        return (
            <div key={index} id={"Card"+index}>
                <p>{x.question}</p>
                <button onClick={()=>{this.showAnswer(x.answer)}}>Show answer</button>
                <input onKeyPress={()=>{this.checkAnswer(x.answer)}}/>
            </div>
        )
    })

    return (
      <div>
        <div className={display}>
            <p>Answer</p>
            <p>{this.props.currentAnswer}</p>
        </div>
        <div className={display}>
            <p>Question</p>
            <p>{this.props.cards[this.props.cardIndex].question}</p>
        </div>
        <button onClick={()=>{this.props.nextQns()}}>Next Question</button>
        <button onClick={()=>{this.props.prvQns()}}>Previous Question</button>
        {/*displayCard*/}
      </div>
    );
  }
}

export default Form;