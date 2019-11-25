import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';

const cx = classnames.bind(styles)

class Card extends React.Component {

    render() {

        const answer = cx(
            {
                [styles.hideAnswer]: !this.props.showAnswer,
                [styles.showAnswer]: this.props.showAnswer
            }
        );

        let { cards, cardNumber } = this.props;

        // avoid accessing a non-existent card
        if (cardNumber > cards.length - 1) {
            cardNumber = cards.length - 1
        } 

        return (
            <div className={styles.card}>
                <p>
                    {cards[cardNumber].question}
                </p>
                <p className={answer}>
                    {cards[cardNumber].answer}
                </p>
            </div>
        );


    }

}

export default Card;