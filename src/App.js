import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarContainer from "./components/CarContainer"
import "./main.css"


class App extends Component {

  state = {
    carData: [
      {
        title: "Subaru WRX STI",
        description: "Compact Sports Sedan",
        image: "https://pictures.dealer.com/r/ramseysubaruramseysoa/0286/539e254a9013eefcb499bf6fe0f4092bx.jpg"
      },
      {
        title: "Toyota 4Runner",
        description: "Midsize Body-On-Frame SUV",
        image: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/01/31135754/2020-toyota-4runner-trdpro-f34-1.jpg"
      },
      {
        title: "Honda Accord",
        description: "Midsize Sedan",
        image: "https://www.motortrend.com/uploads/sites/5/2019/09/2020-Honda-Accord-Sport-2.0T-front-three-quarter-view-1.jpg?fit=around%7C875:492"                   
      }
    ]
};

  render() {
    return (
      <main className="App">
        <CarContainer carData={this.state.carData} />
      </main>
        
    );
  }
}

export default App;
