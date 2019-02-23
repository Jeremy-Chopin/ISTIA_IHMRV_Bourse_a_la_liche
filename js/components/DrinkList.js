import React from 'react';
import DrinkStore from '../stores/drinkStore';
import RouterAction from '../actions/routerAction';


class DrinkList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			drink: DrinkStore.getAllDrinks()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ drink: DrinkStore.getAllDrinks() });
	}

	componentWillMount() {
		DrinkStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		DrinkStore.removeChangeListener(this._onChange);
	}
	submitDrinks() {
		RouterAction.changeRoute('charts');	
	}

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
