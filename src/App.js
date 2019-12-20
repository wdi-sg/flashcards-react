import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';

class App extends Component {
	constructor() {
		super();
		this.state = {
			current: 0,
			show: false,
			cards: [
				{
					question: 'Capital of Singapore',
					answer: 'Singapore'
				},
				{
					question: 'Capital of Indonesia',
					answer: 'Jakarta'
				}
			]
		};
	}
	toggleShow = () => {
		let { show } = this.state;
		console.log('toggling show', show);
		this.setState({ show: !this.state.show });
		console.log(this.show);
	};

	render() {
		const { cards, current, show } = this.state;
		return (
			<div className='App'>
				<Cards cards={cards} current={current} show={show} toggleShow={this.toggleShow} />
				<button
					onClick={() => {
						if (current < cards.length - 1) {
							console.log('its okay');
							this.setState({ current: current + 1 });
							this.setState({ show: false });
						} else {
							alert('NO!');
						}
					}}>
					Next card
				</button>
			</div>
		);
	}
}

export default App;
