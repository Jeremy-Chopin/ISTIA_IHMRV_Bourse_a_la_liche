import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';
let pricesState = [];

class PricesStore extends EventEmitter {

    constructor() {
        super();

        // Registers action handler with the Dispatcher.
        Dispatcher.register(this._registerToActions.bind(this));
    }

    
    // Hooks a React component's callback to the CHANGE event.
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	}

	// Removes the listener from the CHANGED event.
	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	}
}
export default new PricesStore();
