import React from 'react';

class Question extends React.Component {
    render() {
        return (<div>
            <h2>Question</h2>
            <h1>{this.props.question}</h1>
            <div>
                Your answer: <input onChange={event=>{this.props.changeAnswer(event.target.value)}} type="text"/>
                <button onClick={()=>{this.props.checkAnswer()}}>Check answer</button>
            </div>
            <button onClick={()=>{this.props.flipCard()}}>Show answer</button>
        </div>);
    }
}

export default Question;