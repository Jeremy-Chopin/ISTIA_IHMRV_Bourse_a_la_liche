import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class DrinkActions {

	addNewDrink(drink) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_NEW_DRINK,
			payload: drink 
		});
	}
}

export default new DrinkActions();