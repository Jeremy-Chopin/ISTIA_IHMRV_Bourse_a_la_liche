import React from 'react';

// STORES
import ConfigurationStore from '../../stores/configurationStore';
import DrinkStore from '../../stores/drinkStore';


//ACTIONS
import ConfigurationActions from '../../actions/configurationActions';
import DrinkActions from '../../actions/drinkActions';

// COMPONENT
import Graphique from '../charts/graphique'
import Constants from '../../constants';

class Charts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drink: DrinkStore.getDrinksState(), //this.initializeDrinkList(),
      refreshingTime: ConfigurationStore._getRefreshingTimeInterval,
      numberOfDrink: DrinkStore.getDrinksState().lenght,
      chartData: {
        maximator: [
          1, 3, 5, 7, 9
        ],
        86: [
          2, 4, 6, 8, 10
        ],
        leffRuby: [
          8, 4, 6, 7, 3
        ]
      }
    }
  }

  getRandomIntilizationValue(min, max) {
    const value = (Math.random() * (max - min)) + min;
    return value;
  }

  initializeDrinkList() {
    return (drink)
  }


  componentWillMount() {
    DrinkActions.setNewPrices(this.state.drink);
    setInterval(this.calculPrice, this.state.refreshingTime);
    if(this.state.data.lenght < 2) {
      for(let indexOfDrink = 0; indexOfDrink < Constants.LIMIT_NUMBER_OF_PRICES ; indexOfDrink++){
        for(let simulatedOldPrices = 0; simulatedOldPrices < numberOfDrink; simulatedOldPrices++){
          this.state.drink[indexOfDrink].prices.unshift([
            getRandomIntilizationValue()
          ])
        }
      }
    }

  }

  calculPrice(boisson, actualconsommation) {

    var x = actualconsommation / boisson.consommationPrecendente * boisson.coefficientMarge;
    if (Math.abs(x - boisson.coefficientMarge) > 0.2) {
      if (x < boisson.coefficientMarge) {
        x = boisson.coefficientMarge - 0.2
      }
      else {
        x = boisson.coefficientMarge + 0.2
      }
    }

    if (x > 1) {
      x = 1;
    }

    if (x < 0) {
      x = 0;
    }

    var marge = boisson.prixMax - boisson.prixMin;

    var newPrice = marge * x + boisson.prixMin;

    boisson.prixActuel = newPrice;
    boisson.coefficientMarge = x;
    boisson.consommationPrecendente = actualconsommation;
  }

  handleOnClickLicheButton(event) {
    console.log(event)
  }

  renderButton() {
    let renderButton = [];
    for (let i = 0; i < this.state.drink.length; i++) {
      renderButton.push(<input type='button' className="btn btn-primary btnConso" value={this.state.drink[i][0].name} /*onClick={this.handleOnClickLicheButton.bind(this)}*/ />);
    }
    return (renderButton)
  }


  render() {
    return (
      <div className='body-home'>
        <div className='chart-dom'>
          <Graphique
            data={this.state.data}
          />
        </div>


        <div className='container sales-buttons'>
          {this.renderButton()}
        </div>
      </div>
    );
  }


  

}
export default Charts;