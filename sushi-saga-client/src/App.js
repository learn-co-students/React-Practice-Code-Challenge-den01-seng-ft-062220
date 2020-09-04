import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [], 
    money: 100,
    displayedSushiIndex: 0
  }

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(sushi => this.setState({
        sushi: sushi
      }))
  }

  chooseFourSushis = () => {
    return this.state.sushi.slice(this.state.displayedSushiIndex, this.state.displayedSushiIndex + 4)
  }

  eatSushi = (sushi) => {
    const newMoney = this.state.money - sushi.price;
    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        money: newMoney,
        eaten: [...this.state.eaten, sushi]
      })
    }
  }

  moreSushi = () => {
    const newDisplayedSushiIndex = this.state.displayedSushiIndex + 4;
    this.setState({
      displayedSushiIndex: newDisplayedSushiIndex
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          chooseFourSushis={this.chooseFourSushis()}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
        />
        <Table remainingMoney={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;