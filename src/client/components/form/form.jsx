import React from 'react';
import ReactDOM from 'react-DOM';
import classnames from 'classnames';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';

import styles from './style.scss';

const cx = classnames.bind(styles)


const cards = [{
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



class Form extends React.Component {

        constructor() {
            super();

            this.state = {
                side: 'question',
                clicked: false,
                cardNum: 0,
                answer: '',
                visibility: 'hidden'

            };
        }

        flipHandler() {
            console.log('flipping')
            this.setState({ clicked: !this.state.clicked, side: 'answer', visibility: 'show' })
        }

        forwardHandler() {
            console.log('next')
            this.setState({ clicked: !this.state.clicked, cardNum: this.state.cardNum + 1, side: 'question', answer: '', visibility: 'hidden' })

        }




        render() {
                // const { side } = this.props
                // const { question, answer, forwardHandler, flipHandler } = this.props

                // calling cx sets all the styles on the element in the display variable
                const display = cx(
                    styles.myclass, // styles that never change
                    { // dynamic styles
                        [styles.clicked]: this.state.clicked
                        // [styles.visible]: this.state.visible
                        // make the key the style name, and the value the dynamic boolean
                    }
                )
                console.log(side);
                // seeing card number
                console.log("card num is", this.state.cardNum)
                const { side } = this.state

            {/*}    const cardText;
                if (side === 'question') {
                   cardText = `Question: ${cards[this.state.cardNum].question}`;
                } else {
                   cardText = `Answer: ${cards[this.state.cardNum].answer}`
                };  */}



                return (
                    <div>
                       <div className='card'>

                        <div className={display} >
                         {this.state.visibility === "hidden" && <span className="hidden"><VisibilityOff size="small" onClick={() => (this.flipHandler())}/> Show Answer</span>}
                         {this.state.visibility === "show" && <span className="visible"><Visibility size="small" onClick={() => (this.flipHandler())}/> Hide Answer</span>}
                         <h3> Question: {cards[this.state.cardNum].question}</h3>
                         {this.state.side === "answer" && <h3> Answer: {cards[this.state.cardNum].answer}</h3>}
                        </div>

                        </div>

                        <button onClick={() => { this.forwardHandler() }}>Next Question</button>
                      </div>
                    );
                  }

                }

export default Form;



class Main extends React.Component {
  render() {
    return (
      <div className='wrapper'>

        <div className='content-wrapper'>
          <Form />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));