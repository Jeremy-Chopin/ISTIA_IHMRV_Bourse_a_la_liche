import React from 'react';
import ConfigurationActions from '../../actions/ConfigurationActions';
import ConfigurationStore from '../../stores/configurationStore';
import { Redirect } from 'react-router-dom'

import DrinkList from './drinkList';

class Configuration extends React.Component {

    constructor(props) {
        super(props);

        //Default State Value
        this._getFreshDrink = this._getFreshDrink.bind(this);

        //General Parameter Changes Handler (drink are handle by inter form)
        this.handleNumberOfDrinksChange = this.handleNumberOfDrinksChange.bind(this);
        this.handleRefreshingTimeIntervalChange = this.handleRefreshingTimeIntervalChange.bind(this);

        this.state = {
            numberOfDrinks: "",
            refreshingTime: "",
            drink: this._getFreshDrink(),

        };

    }

    // Default State Methods
    _getFreshDrink() {
        return {
            name: '',
            initialPrice: '',
            minPrice: '',
            maxPrice: '',
        };
    }

    // Changes Handler

    handleNumberOfDrinksChange(event) {
        let value = event.target.value;

        this.setState({ numberOfDrinks: value });

    }

    handleRefreshingTimeIntervalChange(event) {
        let value = event.target.value;
        this.setState({ refreshingTime: value });

    }

    //When a field in drink-form is changed, put value in state
    handleDrinksChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        if (!value) {
            return;
        }
        this.state.drink[field] = value;
        this.setState({ drink: this.state.drink });
    }



    onSubmitForm() {
        event.preventDefault();
        if (this.state.numberOfDrinks < 1 || this.state.numberOfDrinks > 6) {
            console.log("Veuillez entrer un nombre en 1 et 6");
            return;
        }
        else if (this.state.refreshingTime < 20 || this.state.refreshingTime > 600) {
            console.log("Veuillez entrer un nombre de boissons compris entre 1 et 6");
            return;
        }
        else if (this.state.length !== this.state.numberOfDrinks) {
            console.log("Veuillez entrer le bon nombre de boisson choisi au préalable");
            return;
        }
        else {
            ConfigurationActions.setRefreshingTimeInterval(this.state.refreshingTime);
            ConfigurationActions.setNumberOfDrinks(this.state.numberOfDrinks);            
        }
    }

    //Actions calls methods

    _addConfig(event) {
        event.preventDefault();

        if (!this.state.refreshingTime || !this.state.numberOfDrinks) {
            return;
        }
        ConfigurationActions.setRefreshingTimeInterval(this.state.refreshingTime);
        ConfigurationActions.setNumberOfDrinks(this.state.numberOfDrinks);
    }

    _addNewDrink(event) {
        event.preventDefault();

        if (!this.state.drink.name || !this.state.drink.initialPrice || !this.state.drink.maxPrice || !this.state.drink.minPrice) {
            return;
        }
        if(!(parseInt(this.state.drink.minPrice) < parseInt(this.state.drink.initialPrice) && parseInt(this.state.drink.initialPrice) < parseInt(this.state.drink.maxPrice))){
            return;
        }
        ConfigurationActions.addNewDrink(this.state.drink);
        this.setState({ drink: this._getFreshDrink() });
        document.getElementById("drink-form").reset();
    }

    // render methods

    renderSubmitButton() {
        if (this.state.refreshingTime && this.state.numberOfDrinks && ConfigurationStore.getAllDrinks().length > 0) {
            return (
                <button type="button" className="btn btn-primary add" Ca part en Prod/>
                
            );
        }
        else {
            return (
                <button type="submit" className="btn btn-primary add" disabled>Ca part en Prod</button>
            )
        }
    }

    _renderAddNewDrink() {
        return (
            <div>
                <h2 className="configuration-title-drink">Met la gnole</h2>
                <form id="drink-form" className="form-inline add-item" >
                    <input type="text" className="form-control description configuration-drink-form" name="name" value={this.state.drink.description} placeholder="Description" onChange={this.handleDrinksChange.bind(this)} />
                    <input type="text" className="form-control initial" name="initialPrice" value={this.state.drink.initialPrice} placeholder="Intial Price" onChange={this.handleDrinksChange.bind(this)} />
                    <input type="text" className="form-control" name="minPrice" value={this.state.drink.minPrice} placeholder="Min Price" onChange={this.handleDrinksChange.bind(this)} />
                    <input type="text" className="form-control" name="maxPrice" value={this.state.drink.maxPrice} placeholder="Max Price" onChange={this.handleDrinksChange.bind(this)} />
                    <button type="button" className="btn btn-primary add" onClick={this._addNewDrink.bind(this)}>Ajouter</button>
                </form>
            </div>
        )
    }

    render() {
        console.log(this.state)
        return (
            <div className="body-home">
                <h2 className="configuration-title-general">Configuration Générale</h2>
                <form id="configuration-general-form" className="form-inline add-item configuration-general-form" onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" className="form-control " name="number" value={this.state.numberOfDrinks} onChange={this.handleNumberOfDrinksChange.bind(this)} placeholder="Nombre de Boissons [1; 6]" />
                    <input type="text" className="form-control " name="number" value={this.state.refreshingTime} onChange={this.handleRefreshingTimeIntervalChange.bind(this)} placeholder="Interval de rafraichissement [20; 600] sec" />
                    <button type="button" className="btn btn-primary add" onClick={this._addConfig.bind(this)}>Ajouter</button>
                </form>
                {this._renderAddNewDrink()}
                <DrinkList />
                {this.renderSubmitButton()}
            </div>
        );
    }
}
export default Configuration;