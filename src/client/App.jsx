import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            start: false
        };
    }

    clickStart(){
        // if(this.state.start === true){
        //     console.log("End button is clicked");
        //     this.setState({start: false});
        // } else {
        //     console.log("Start button is clicked");
        //     this.setState({start: true});
        // }
        this.setState({start: !this.state.start});
    }

    render() {

        if(this.state.start === true) {
            var showEndBtn = "End";
        } else {
            var showEndBtn = "Start";
        }

        return (
            <div>
                <h1>Welcome</h1>
                <hr/>
                <button onClick={() => {this.clickStart()}}>{showEndBtn}</button>
                <Form startCard={this.state.start} />
            </div>
        );
    }
}

export default hot(module)(App);
