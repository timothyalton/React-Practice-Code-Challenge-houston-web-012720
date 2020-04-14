import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushiList: [],
    sliceStart: 0,
    sliceEnd: 4,
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({
          sushiList: sushis,
          displaySushiList: sushis,
          eatenSushi: [],
          money: 100
        })
        // console.log(sushis)
      })
  }


moreSushi = () =>{
  this.setState({
    sliceStart: this.state.sliceStart + 4,
    sliceEnd: this.state.sliceEnd + 4
  })
}

deleteSushi = (sushi) =>{
  this.setState({
    displaySushiList: this.state.displaySushiList.filter(s => s.id !== sushi.id),
    eatenSushi: [...this.state.eatenSushi, 1],
    money: this.state.money - sushi.price
  })
}

  render() {
    console.log(this.state.sushiList)
    return (
      <div className="app">
        <SushiContainer displaySushiList={this.state.displaySushiList} sliceStart={this.state.sliceStart} sliceEnd={this.state.sliceEnd} moreSushi={this.moreSushi} deleteSushi={this.deleteSushi} money={this.state.money}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;