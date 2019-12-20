import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Cards extends Component {
	render() {
		const { cards, current, show } = this.props;
		console.log(show);
		return (
			<div>
				<ShowCard card={cards[current]} toggleShow={this.props.toggleShow} show={show} />
			</div>
		);
	}
}

export default Cards;
