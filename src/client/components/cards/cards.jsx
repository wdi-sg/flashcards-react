import React, { Component } from 'react'

import classnames from 'classnames';

import styles from '../form/style.scss';

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
export class Cards extends Component {
    constructor(){
        super();
    
        this.state = {
          qnCounter: 0,
          qn: "",
          ans: "",
          showAns: false
        };
      }
    showAnswer(){
        console.log(this.state.qnCounter)
        let answer = cards[this.state.qnCounter -1 ].answer
        this.setState({ans: answer, showAns: !this.state.showAns})
    }

    nextQuestion() {
       
        console.log(this.state.qnCounter)
      
          let question = cards[this.state.qnCounter].question
          this.setState({qn: question, showAns: false})
          this.state.qnCounter ++
        
       
    }
    render() {
        const showAns = cx(
            styles.show,
            { 
              [styles.hide]: !this.state.showAns 
            }
          )
       
        return (
           <div className="container text-center mt-5 border">
            <h1>HERE WE GO</h1>
            <div className="container text-center border">
               <h1>{this.state.qn}</h1>
               <h2 className={showAns}>{this.state.ans}</h2>
            </div>

            <button onClick={()=>{this.showAnswer()}}>Show Answer</button>
            <button onClick={()=>{this.nextQuestion()}}>Next Question</button>
               
           </div>
        )
    }
}

export default Cards
