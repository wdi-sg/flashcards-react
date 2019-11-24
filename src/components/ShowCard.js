import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ShowCard extends Component {
	render() {
		const { question, answer } = this.props.card;
		return (
			<div style={cardStyle}>
				<h1>{this.props.show ? answer : question}</h1>
				<div>
					<button
						onClick={() => {
							this.props.toggleShow();
						}}>
						Show answer
					</button>
				</div>
			</div>
		);
	}
}
const cardStyle = {
	width: '40%',
	margin: '50px auto',
	padding: '5px 8px',
	border: '2px solid black'
};

ShowCard.propTypes = {
	card: PropTypes.object.isRequired
};

export default ShowCard;
