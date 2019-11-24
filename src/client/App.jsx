import React from 'react';
import { hot } from 'react-hot-loader';
import classnames from 'classnames';
import styles from './style.scss';
const cx = classnames.bind(styles)


import Form from './components/form/form';
import Correct from './components/correct/correct';
import Wrong from './components/wrong/wrong';



// ========================================================================
// Component starts here
// ========================================================================
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false,
      card: [
          {
            question: '2+2',
            answer: '4',
            message: ""
          },
          {
            question: 'Capital of Malaysia',
            answer: 'Kuala Lumpur',
            message: ""
          },
          {
            question: 'Kilometers in a mile',
            answer: '1.6',
            message: ""
          },
          {
            question: 'School that Harry Potter attended',
            answer: 'Hogwarts',
            message: ""
          },
          {
            question: 'Country that is home to the kangaroo',
            answer: 'Australia',
            message: ""
          },
          {
            question: '7x12',
            answer: '84',
            message: ""
          },
          {
            question: 'The fictional detective that lived at 221b Baker Street',
            answer: 'Sherlock Holmes',
            message: ""
          },
          {
            question: 'Largest city in Wales',
            answer: 'Cardiff',
            message: ""
          },
          {
            question: 'The distance around a circle is called',
            answer: 'Circumference',
            message: ""
          },
          {
            question: 'The most famous nurse of Victorian Times who improved care for wounded soldiers',
            answer: 'Florence Nightingale',
            message: ""
          },
        ],
      score: 0,
      counter: 0,
      userAnswer: "",
      first: false,
      last: false
    };
  }

  prevQns(){
    this.setState({clicked: false});
    if (this.state.counter > 0){
        this.setState({counter: this.state.counter - 1})
    };
    if (this.state.userAnswer !== ""){
        this.setState({userAnswer: ""});
    };
  };

  nextQns(){
    this.setState({clicked: false});
    if (this.state.counter < (this.state.card.length - 1) ){
        this.setState({counter: this.state.counter + 1})
    };
    if (this.state.userAnswer !== ""){
        this.setState({userAnswer: ""});
    };
  };

  showAns(){
    this.setState({clicked: !this.state.clicked});
    let card = this.state.card;
    card[this.state.counter].message = "You did not get the answer :(";
    this.setState({card: card});
    this.setState({score: this.state.score - 1 });
  };

  inputHandler(e){
    this.setState({userAnswer: e.target.value});
    if (e.target.value === this.state.card[this.state.counter].answer.toLowerCase()){
        let card = this.state.card
        card[this.state.counter].message = "You've got the correct answer!"
        this.setState({card: card});
        this.setState({score: this.state.score + 1 });
    };
  };


// ========================================================================
// Render Page starts here
// ========================================================================
  render() {

    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      { // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )

    const rightBtn = cx(
      styles.button, // styles that never change
      { // dynamic styles
        [styles.disappear]: this.state.last // make the key the style name, and the value the dynamic boolean
      }
    )

    const leftBtn = cx(
      styles.button, // styles that never change
      { // dynamic styles
        [styles.disappear]: this.state.first // make the key the style name, and the value the dynamic boolean
      }
    )

    let card;
    let word;
    let title;
    if (this.state.clicked){
        card = this.state.card[this.state.counter].answer
        title = "Answer " + (this.state.counter + 1) + ":"
    } else {
        card = this.state.card[this.state.counter].question
        title = "Question " + (this.state.counter + 1) + ":"
    }


    let readOnly;
    let show;
    if (this.state.card[this.state.counter].message === ""){
        readOnly = false;
        show = this.state.userAnswer;
    } else {
        readOnly = true;
        show = this.state.card[this.state.counter].answer
    }


    let question;
    let answer;
    if (this.state.card[this.state.counter].message === "You've got the correct answer!"){
        question = this.state.card[this.state.counter].question;
        answer = this.state.card[this.state.counter].answer;
    }

    let wquestion;
    let wanswer;
    if (this.state.card[this.state.counter].message === "You did not get the answer :("){
        wquestion = this.state.card[this.state.counter].question;
        wanswer = this.state.card[this.state.counter].answer;
    }


    let correctCount = 0;
    let wrongCount = 0;
    let unAnswered = 0;
    for (let i = 0; i < this.state.card.length; i++){
        if (this.state.card[i].message === "You've got the correct answer!"){
            correctCount = correctCount + 1
        } else if (this.state.card[i].message === "You did not get the answer :("){
            wrongCount = wrongCount + 1
        } else {
            unAnswered = unAnswered + 1
        }
    }

    if (this.state.counter === 0 && this.state.first == false ){
        this.setState({first: true})
    } else if (this.state.counter > 0 && this.state.first == true ){
        this.setState({first: false})
    }

    if (this.state.counter === (this.state.card.length - 1) && this.state.last == false ){
        this.setState({last: true})
    } else if (this.state.counter < (this.state.card.length - 1) && this.state.last == true ){
        this.setState({last: false})
    }

    console.log(this.state.counter)

    return (
      <div>
        <div className={styles.center}>
            <button type="button" className={styles.stats} data-toggle="modal" data-target="#exampleModalCenter">
              Stats
            </button>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Stats</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body text-left">
                    <p><b>Total Questions:</b></p>
                    <p>{this.state.card.length}</p>
                    <p><b>Answered Questions:</b></p>
                    <p>{this.state.card.length - unAnswered}</p>
                    <p><b>Correct Answers:</b></p>
                    <p>{correctCount}</p>
                    <p><b>Wrong Answers:</b></p>
                    <p>{wrongCount}</p>
                    <p><b>Your Score:</b></p>
                    <p>{this.state.score}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.center}>
            <button className={styles.restart} onClick={()=>{window.location.reload()}}><i className='bx bx-repost bx-md align-bottom' ></i></button>
        </div>
        <div className={styles.main}>
            <button className={leftBtn} onClick={()=>{this.prevQns()}}><i className='bx bx-chevron-left bx-lg'></i></button>
            <div className={display}>
                <h4>{title}</h4>
                <h3>{card}</h3>
                <p>{this.state.card[this.state.counter].message}</p>
                <Form answer={(e)=>{this.inputHandler(e)}} show={show} read={readOnly} />
                <br/>
                <button className={styles.dunno} onClick={()=>{this.showAns()}} disabled={readOnly}>I dont't know <i className='bx bx-sad align-text-bottom' ></i></button>
            </div>
            <button className={rightBtn} onClick={()=>{this.nextQns()}}><i className='bx bx-chevron-right bx-lg'></i></button>
        </div>
        <div className={styles.below}>
            <Correct className={styles.correct} question={question} answer={answer} />
            <Wrong className={styles.wrong} question={wquestion} answer={wanswer} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);