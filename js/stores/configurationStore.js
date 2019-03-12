import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

let _drinkState = [];
let _generalConfigurationState = [];
const CHANGE = 'CHANGE';

class ConfigurationStore extends EventEmitter {
	constructor() {
		super();

		// Registers action handler with the Dispatcher.
		Dispatcher.register(this._registerToActions.bind(this));
	}

	// FLUX NECESSERIES STORES METHODS

	// Switches over the action's type when an action is dispatched.
	_registerToActions(action) {
		switch (action.actionType) {
			case ActionTypes.ADD_NEW_DRINK:
				this._addNewDrink(action.payload);
				break;
			case ActionTypes.SET_NUMBER_OF_DRINKS:
				this._setNumberOfDrink(action.payload);
				break;
			case ActionTypes.SET_REFRAISHING_TIME_INTERVAL:
				this._setRefraishingTimeInterval(action.payload);
				break;
		}
	}

	// Hooks a React component's callback to the CHANGE event.
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	// Removes the listener from the CHANGED event.
	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	// CONFIGURATION STORE OWN METHODS

	// Adds a new item to the list and emits a CHANGED event. 
	_addNewDrink(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
	}

	// Return all drinks for listing items
	getAllDrinks() {
		return _drinkState;
	}


	// Adds a new item to the list and emits a CHANGED event. 
	_addNewPrices(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
	}

	_setNumberOfDrink(numberOfDrinks) {
		_generalConfigurationState.push(numberOfDrinks);
		this.emit(CHANGE);
	}

	_setRefraishingTimeInterval(refraishingTimeInterval) {
		_generalConfigurationState.push(refraishingTimeInterval);
		this.emit(CHANGE);
	}

	_getNumberOfDrink() {
		return _generalConfigurationState.numberOfDrinks;
	}

	_getRefraishingTimeInterval() {
		return _generalConfigurationState.refraishingTimeInterval;
	}

	// Returns last drink item
	getLastPrices() {
		return pricesState[pricesState.length - 1];
	}

	getLastNPrices(limit) {
		return pricesState
	}
}
export default new ConfigurationStore();