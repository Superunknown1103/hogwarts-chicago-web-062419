import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogFilter from './HogFilters.js';
import HogList from './HogList.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedHogs: hogs
    }
  }

  sortHogs = (event) => {
    let filterType = event.target.value;
    let hogs = this.state.selectedHogs;

    function compare(a, b) {
      let weightA = a.weight;
      let weightB = b.weight;
      let comparison = 0;
      weightA < weightB ? comparison = 1 : comparison = -1;
      return comparison;
    }

    this.setState({
      selectedHogs: hogs.sort(compare)
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <HogFilter sortHogs={this.sortHogs} />
        <HogList hogs={this.state.selectedHogs} />
      </div>
    )
  }
}

export default App;
