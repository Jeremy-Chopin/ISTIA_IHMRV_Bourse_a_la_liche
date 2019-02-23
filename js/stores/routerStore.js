import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

const CHANGE = 'CHANGE';
let currentRoute = "";

class RouterStore extends EventEmitter {

    constructor() {
        super();
        // Registers action handler with the Dispatcher.
        Dispatcher.register(this._registerToActions.bind(this));
    }

    // Switches over the action's type when an action is dispatched.
	_registerToActions(action) {
			this.changeRoute(action.payload);
		}
    
    
	changeRoute(route) {
		currentRoute = route;
		this.emit(CHANGE);
    }
    getCurrentRoute() {
		return currentRoute;
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
export default new RouterStore();
