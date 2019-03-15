import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class DrinkActions {

	setNewPrices(drinkArray) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.SET_NEW_PRICES,
			payload: drinkArray 
		});
	}
}

export default new DrinkActions();