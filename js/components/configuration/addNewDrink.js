import React from 'react';
import ConfigurationAction from '../../actions/configurationActions';

class AddNewDrink extends React.Component {

    constructor(props) {
        super(props);
        
        this._getFreshDrink = this._getFreshDrink.bind(this);
        this.state = {
            drink: this._getFreshDrink()
        };
    }

    _getFreshDrink() {
        return {
            name: '',
            initialPrice: '',
            minPrice: '',
            maxPrice: '',
        };
    }

    _updateState(event) {
		let field = event.target.name;
		let value = event.target.value;
		// If the amount is changed and it's not a float, return.
		if (value && !value.match(/^[a-z0-9.\+\-]+$/g)) {
			return;
		}
		this.state.drink[field] = value;
		this.setState({ drink : this.state.drink });
	}

    _addNewDrink(event) {
        event.preventDefault();
		this.state.drink.name = this.state.drink.name;
        this.state.drink.initialPrice = this.state.drink.initialPrice || '0';
        this.state.drink.minPrice = this.state.drink.minPrice || '0';
        this.state.drink.maxPrice = this.state.drink.maxPrice || '0';
		ConfigurationAction.addNewDrink(this.state.drink);
        this.setState({ drink : this._getFreshDrink() });
    }

    render() {
        return (
            <div>
                <h2 className="drink-form">Met la gnole</h2>
                <form className="form-inline add-item" onSubmit={this._addNewDrink.bind(this)}>
                    <input type="text" className="form-control description" name="name" value={this.state.drink.description} placeholder="Description" onChange={this._updateState.bind(this)} />
                    <input type="text" className="form-control initial" name="initialPrice" value={this.state.drink.initialPrice} placeholder="Intial Price" onChange={this._updateState.bind(this)} />
                    <input type="text" className="form-control" name="minPrice" value={this.state.drink.minPrice} placeholder="Min Price" onChange={this._updateState.bind(this)} />
                    <input type="text" className="form-control" name="maxPrice" value={this.state.drink.maxPrice} placeholder="Max Price" onChange={this._updateState.bind(this)} />
                    <button type="submit" className="btn btn-primary add">Ajouter</button>
                </form>

            </div>
        )
    }
}
export default AddNewDrink;