import React from 'react';
import styles from './style.scss';
import Card from '../Card/Card';
import classnames from 'classnames';
import SortBucket from '../SortBucket/SortBucket'
const cx = classnames.bind(styles)

class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            questionNum: 0,
            showQuestion: true,
            cards: [
                {question: '2+2',answer: 4,attempted: false},
                {question: 'capital of Malaysia',answer: 'Kuala Lumpur',attempted: false},
                {question: 'Kilometers in a mile',answer: 1.6,attempted: false},
            ],
            know:[],
            dunno:[],
            currentAnswer: "",
            attempted:[]
        };
    }

    changeAnswer(value) {
        this.setState({currentAnswer: value})
    }

    checkAnswer() {
        if (!this.state.attempted.includes(this.state.questionNum)) {this.setState({attempted:[this.state.questionNum,...this.state.attempted]})}
        if (this.state.currentAnswer == this.state.cards[this.state.questionNum].answer) {
            if (!this.state.know.includes(this.state.questionNum)) {this.sortCard(true)}
        } else {
            if (!this.state.dunno.includes(this.state.questionNum)) {this.sortCard(false)}
        }
    }

    previousQuestion() {
        this.setState({questionNum: this.state.questionNum - 1,showQuestion: true})
    }

    nextQuestion() {
        this.setState({questionNum: this.state.questionNum + 1,showQuestion: true})
    }

    flipCard() {
        this.setState({showQuestion: !this.state.showQuestion})
    }

    sortCard(boolean) {
        this.setState(boolean ? {know:[this.state.questionNum,...this.state.know]} : {dunno:[this.state.questionNum,...this.state.dunno]})
        this.setState(boolean ? {dunno:this.state.dunno.filter(qNum=> qNum !== this.state.questionNum)} : {know:this.state.know.filter(qNum=> qNum !== this.state.questionNum)})
    }

    render() {
        const wells = cx(styles.wells,styles.bottom)
        const firstCard = cx(
            styles.buttons, {
            [styles.edge]: this.state.questionNum == 0
        })
        const lastCard = cx(
            styles.buttons, {
            [styles.edge]: this.state.questionNum == this.state.cards.length - 1
        })
        const feedback = cx(
            styles.fullWidth,{
            [styles.edge]: !this.state.attempted.includes(this.state.questionNum)
        })
        const correct = cx(
            styles.correct,{
            [styles.edge]: !this.state.know.includes(this.state.questionNum)
        })
        const wrong = cx(
            styles.wrong,{
            [styles.edge]: !this.state.dunno.includes(this.state.questionNum)
        })
        return (<div className={styles.game}>
            <div className={firstCard}>
                <button onClick={()=>{this.previousQuestion()}}>Previous</button>
            </div>
            <div className={styles.card}>
                <Card state={this.state} card={this.state.cards[this.state.questionNum]} flipCard={()=>{this.flipCard()}} changeAnswer={(value)=>{this.changeAnswer(value)}} checkAnswer={()=>this.checkAnswer()}/>
                <SortBucket state={this.state} sortCard={(boolean)=>{this.sortCard(boolean)}} />
            </div>
            <div className={lastCard}>
                <button onClick={()=>{this.nextQuestion()}}>Next</button>
            </div>
            <div className={feedback}>
                <span className={correct}>CORRECT!</span><span className={wrong}>WRONG!</span>
            </div>
            <div className={wells}>
                <h1>I know! X {this.state.know.length}</h1>
            </div>
            <div className={wells}>
                <h1>I don't know... X {this.state.dunno.length}</h1>
            </div>
        </div>);
    }
}

export default Game;