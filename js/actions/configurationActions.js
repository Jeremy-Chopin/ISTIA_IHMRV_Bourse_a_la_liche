import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ConfigurationActions {

	addNewDrink(drink) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_NEW_DRINK,
			payload: drink 
		});
	}
	setNumberOfDrinks(numberOfDrinks) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.SET_NUMBER_OF_DRINKS,
			payload: numberOfDrinks
		});
	}
	setRefreshingTimeInterval(refreshingTimeInterval) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.SET_REFRESHING_TIME_INTERVAL,
			payload: refreshingTimeInterval 
		});
	}
}

export default new ConfigurationActions();