import Dispatcher from '../dispatcher';

class RouteActions {

	changeRoute(route) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			payload: route 
		});
	}
}

export default new RouteActions();