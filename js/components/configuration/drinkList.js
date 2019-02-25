import React from 'react';
import ConfigurationStore from '../../stores/configurationStore';

let _drinkState = [];

class DrinkList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			drink: ConfigurationStore.getAllDrinks()
		};

		//this._onChange = this._onChange.bind(this);
	}
/*
	_onChange() {
		this.setState({ drink: ConfigurationStore.getAllDrinks() });
	}

	componentWillMount() {
		ConfigurationStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ConfigurationStore.removeChangeListener(this._onChange);
	}
	*/
	render() {

		let noDrinkMessage;

		// Show a friendly message instead if there are no items.
		if (!this.state.drink.length) {
			noDrinkMessage = (<li className="no-items">Your bar is empty</li>);
		}

		return (
			<div className="drink-list">
				<ul className="items-list">
					{noDrinkMessage}
					{this.state.drink.map((drinkDetails) => {
						return (<li key={drinkDetails.id}>{drinkDetails.name}
							<span className="initial-price">{drinkDetails.initialPrice}</span>
							<span className="min-price">{drinkDetails.minPrice}</span>
							<span className="max-price">{drinkDetails.maxPrice}</span>
						</li>);
					})}
				</ul>
			</div>
			
		);
	}
}
export default DrinkList;
