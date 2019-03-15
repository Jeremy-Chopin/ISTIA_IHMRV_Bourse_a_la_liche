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
			case ActionTypes.SET_REFRESHING_TIME_INTERVAL:
				this._setRefreshingTimeInterval(action.payload);
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

	//SETTERS
	// Adds a new item to the list and emits a CHANGED event. 
	_addNewDrink(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
	}

		// Adds a new item to the list and emits a CHANGED event. 
	_addNewPrices(drink) {
		drink.id = _drinkState.length;
		_drinkState.push(drink);
		this.emit(CHANGE);
	}

	_setNumberOfDrink(numberOfDrinks) {
		_generalConfigurationState.numberOfDrinks = numberOfDrinks;
		this.emit(CHANGE);
	}

	_setRefreshingTimeInterval(refreshingTimeInterval) {
		_generalConfigurationState.refreshingTimeInterval = refreshingTimeInterval;
		this.emit(CHANGE);
	}

	// GETTERS
	// Return all drinks for listing items
	getAllDrinks() {
		return _drinkState;
	}

	_getNumberOfDrink() {
		return _generalConfigurationState.numberOfDrinks;
	}

	_getRefreshingTimeInterval() {
		return _generalConfigurationState.refreshingTimeInterval;
	}
}
export default new ConfigurationStore();