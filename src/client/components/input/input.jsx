import React from 'react';

import classnames from 'classnames';

class Input extends React.Component {
  showAnswer(answer){
    // console.log(answer)
    console.log(answer)
    this.props.answer(answer)
    // this.setState({currentAnswer: answer})
  }

  checkAnswer(answer){
    if(event.key === 'Enter'){
        if(event.target.value === answer){
            this.props.answer("Correct")
            // this.setState({currentAnswer: "Correct"})
        } else {
            this.props.answer("Wrong")
            // this.setState({currentAnswer: "Wrong"})
        }
    }
  }

  render(){
      return(
        <div>
            <button onClick={()=>{this.showAnswer(this.props.cards[this.props.cardIndex].answer)}}>Show answer</button>
            <input onKeyPress={()=>{this.checkAnswer(this.props.cards[this.props.cardIndex].answer)}}/>
        </div>
      )
  }
}

export default Input