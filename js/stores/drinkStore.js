import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';
let _drinkState = [];

class DrinkStore extends EventEmitter {

    constructor() {
		super();

		// Registers action handler with the Dispatcher.
	}

	// FLUX NECESSERIES STORES METHODS

	// Switches over the action's type when an action is dispatched.
	_registerToActions(action) {
		switch (action.actionType) {
			case ActionTypes.SET_NEW_PRICES:
				this.setNewDrinksPrices(action.payload);
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
	
	// SETTERS
    setNewDrinksPrices(newData){
        if (this._drinkState.lenght === 20){
            this._drinkState.shift();
        }
        this._drinkState.push(newData);
        this.emit(CHANGE);
	}
	
	//GETTERS
	getDrinksState(){
		return this._drinkState;
	}


}
export default new DrinkStore();