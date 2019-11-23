import React from 'react';

class Question extends React.Component {
    render() {
        return (<div>
            <h1>{this.props.question}</h1>
        </div>);
    }
}

export default Question;