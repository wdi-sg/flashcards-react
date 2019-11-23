import React from 'react';

class Answer extends React.Component {
    render() {
        return (<div>
            <h1>{this.props.answer}</h1>
            <button onClick={()=>{this.props.flipCard()}}>Show Question</button>
        </div>);
    }
}

export default Answer;