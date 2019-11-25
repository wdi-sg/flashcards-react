import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Wrong extends React.Component {

  constructor(){
    super();

    this.state = {
      store: []
    };
  }


  saveStuff(){
    let store = this.state.store;
    store.push({
        question: this.props.question,
        answer: this.props.answer
    });
    this.setState({store: store});
  };



  render() {

    if (this.props.question){
        if (this.state.store.length === 0){
            this.saveStuff();
        } else {
            let foundSame = false;
            for (let i = 0; i < this.state.store.length; i++){
                if (this.state.store[i].question === this.props.question){
                    foundSame = true;
                };
            };
            if (foundSame == true){
                console.log("Wrong: found same stuff, not gonna add it");
            } else {
                this.saveStuff();
            }
        }
    };



    let cards;
    cards = this.state.store.map(x=>{
        let qns = x.question;
        let ans = x.answer;
        return  <div className={styles.myclass}>
                    <p><b>Question:</b></p>
                    <p>{qns}</p>
                    <p><b>Answer:</b></p>
                    <p>{ans}</p>
                </div>
    })

    return (
      <div>
        <p className={styles.dunno}>Don't Know:</p>
        <div className={styles.flex}>
        {cards}
        </div>
      </div>
    );
  }
}

export default Wrong;