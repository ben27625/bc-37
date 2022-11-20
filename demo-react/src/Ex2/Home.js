import React, { Component } from "react";
import BlackCar from "../assets/img/black-car.jpg";
import RedCar from "../assets/img/red-car.jpg";
import SilverCar from "../assets/img/silver-car.jpg";
import SteelCar from "../assets/img/steel-car.jpg";

export default class Home extends Component {
    state = {
        carImage: undefined,
    };

    handleChangeColor
  render() {
    return (
      <div>
        <img src={this.state.carImage} alt="" style={{ width: 500}} />
       

        <h2>Pick color:</h2>
        <button
        onClick={() => this.handleChangeColor(BlackCar)}>black</button>
        <button>Red</button>
        <button>Silver</button>
        <button>Steel</button>
      </div>
    );
  }
}
