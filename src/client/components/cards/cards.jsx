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
          showAns: false,
          showQn: false
        };
      }
    showAnswer(){
        console.log(this.state.qnCounter)
        let answer = cards[this.state.qnCounter -1 ].answer
        this.setState({ans: answer, showAns: !this.state.showAns, showQn: !this.state.showQn})
    }

    nextQuestion() {
       
        console.log(this.state.qnCounter)
      
          let question = cards[this.state.qnCounter].question
          this.setState({qn: question, showAns: false, showQn: true})
          this.state.qnCounter ++
    }
    markKnow() {
        console.log("KNOW")
        
    }

    markDontKnow() {
        console.log("DONT KNOW")
    }
    render() {
        const showAns = cx(
            styles.show,
            { 
              [styles.hide]: !this.state.showAns 
            }
          )
        const showQn = cx(
            styles.show,
            { 
              [styles.hide]: !this.state.showQn 
            }
          )
       console.log(this.props)
        return (
           <div className="container text-center mt-5 border">
        
            <div className="container text-center border mb-5">
               <div className={showQn}><h1>Qn: {this.state.qn}</h1> </div>
               <div className={showAns}> <h1>Ans: {this.state.ans}</h1></div>
              Know <input type="checkbox" onChange={this.markKnow}/> {' '}
               Dont' Know <input type="checkbox" onChange={this.markDontKnow}/>
            </div>

            <button onClick={()=>{this.showAnswer()}}>Flip</button>
            <button onClick={()=>{this.nextQuestion()}}>Next Question</button>
               
           </div>
        )
    }
}

export default Cards
