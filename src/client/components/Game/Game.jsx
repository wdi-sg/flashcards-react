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
                {question: '2+2',answer: 4},
                {question: 'capital of Malaysia',answer: 'Kuala Lumpur'},
                {question: 'Kilometers in a mile',answer: 1.6},
            ],
            know:[],
            dunno:[],
            currentAnswer: ""
        };
    }

    changeAnswer(value) {
        this.setState({currentAnswer: value})
    }

    checkAnswer() {
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