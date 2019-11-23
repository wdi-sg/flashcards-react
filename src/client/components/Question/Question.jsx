import React from 'react';

class Question extends React.Component {
    render() {
        return (<div>
            <h1>{this.props.question}</h1>
            <button onClick={()=>{this.props.flipCard()}}>Show answer</button>
        </div>);
    }
}

export default Question;