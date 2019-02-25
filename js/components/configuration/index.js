import React from 'react';
import ConfigurationActions from '../../actions/configurationActions';
import ConfigurationStore from '../../stores/configurationStore';

import AddDrink from './addNewDrink';
import DrinkList from './drinkList';

class Configuration extends React.Component {
    render() {
        return (
            <div>
                <AddDrink/>
                <DrinkList/>
           </div>
        );
    }
}
export default Configuration;