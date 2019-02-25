import React from 'react';
import ConfigurationStore from '../../stores/configurationStore';

class Charts extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      boisson1 : {
        nom:1,
        prixActuel:4,
        prixMax:6,
        prixMin:1,
        coefficientMarge:0.5,
        consommationPrecendente:1
      }
    }

    }

    calculPrice(boisson, actualconsommation) {

      var x = actualconsommation / boisson.consommationPrecendente * boisson.coefficientMarge;

      if(Math.abs(x-boisson.coefficientMarge) > 0.2) {
        if(x < boisson.coefficientMarge){
         x = boisson.coefficientMarge - 0.2
        }
        else{
          x = boisson.coefficientMarge + 0.2
        }
      }

      if(x >1){
        x=1;
      }

      if(x<0){
        x=0;
      }

      var marge = boisson.prixMax - boisson.prixMin;

      var newPrice = marge * x + boisson.prixMin;

      boisson.prixActuel = newPrice;
      boisson.coefficientMarge = x;
      boisson.consommationPrecendente = actualconsommation;
    }

    simulateAchat(params) {

    }

    render() {

      this.simulateAchat();
      return (<div>toto</div>);

    }
}
export default Charts