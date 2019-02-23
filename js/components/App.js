import React from 'react';
//Components
import AddNewDrink from './AddNewDrink';
import DrinkList from './DrinkList';

//Stores
import RouterStore from '../stores/routerStore';

//Actions
import RouterAction from '../actions/routerAction';



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			route: '/'
		};
	}

	submitDrinks() {
		
		this.setState({route: '/charts'})
		RouterAction.changeRoute(this.state.route);

	}

	render() {
		console.log(this.state)
		switch (this.state.route) {
			case '/':
				return (
					<div className="container">
						<h1 className="app-title">Bourse a la liche</h1>
						<AddNewDrink />
						<DrinkList />
						<button type="button" className="btn btn-primary add" onClick={this.submitDrinks.bind(this)}>Valider</button>
					</div>
				);
			break
			case '/charts':
				return (
					<div className="charts">
						<h1>Bonsoir</h1>
					</div>
				)
			break;
			default:
				return (
					<div className="charts">
						<h1>404 mon bro</h1>
					</div>
				)
			break
		}


	}
}

export default App;