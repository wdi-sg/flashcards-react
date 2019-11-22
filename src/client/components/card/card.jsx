import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';

const cx = classnames.bind(styles)

class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            clicked: false
        };
    }

    clickHandler() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        const answer = cx(
            { // dynamic styles
                [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
            }
        )

        return (
            <div onClick={()=>{this.clickHandler()}} className={styles.card}>
                <p>{this.props.question}</p>
                <p className={answer}>{this.props.answer}</p>
            </div>
        );


    }

}

export default Card;