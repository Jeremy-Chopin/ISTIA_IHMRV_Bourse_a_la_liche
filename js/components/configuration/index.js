import React from 'react';
import ConfigurationActions from '../../actions/configurationActions';
import ConfigurationStore from '../../stores/configurationStore';

import AddDrink from './addNewDrink';

class Configuration extends React.Component {
    render() {
        return (
            <div>
                <AddDrink/>
           </div>
        );
    }
}
export default Configuration;