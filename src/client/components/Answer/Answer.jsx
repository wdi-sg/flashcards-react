import React from 'react';

class Answer extends React.Component {
    render() {
        return (<div>
            <h2>Answer</h2>
            <h1>{this.props.answer}</h1>
            <button onClick={()=>{this.props.flipCard()}}>Show Question</button>
        </div>);
    }
}

export default Answer;