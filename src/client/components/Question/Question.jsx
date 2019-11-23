import React from 'react';

class Question extends React.Component {
    render() {
        return (<div>
            <h2>Question</h2>
            <h1>{this.props.question}</h1>
            <button onClick={()=>{this.props.flipCard()}}>Show answer</button>
        </div>);
    }
}

export default Question;