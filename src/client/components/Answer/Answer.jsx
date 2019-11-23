import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
const cx = classnames.bind(styles);

class Answer extends React.Component {
    constructor(){
        super();
        this.state = {
            isHidden: true
        };
    }

    toggleAnswer() {
        this.setState({isHidden:!this.state.isHidden})
    }

    render() {
        const showStyle = cx({
            [styles.answer]: this.state.isHidden
        })
        const hideStyle = cx({
            [styles.answer]: !this.state.isHidden
        })
        return (<div>
            <h1 className={showStyle}>{this.props.answer}</h1>
            <button onClick={()=>{this.toggleAnswer()}}>
                <span className={hideStyle}>Show </span>
                <span className={showStyle}>Hide </span>
                Answer
            </button>
        </div>);
    }
}

export default Answer;