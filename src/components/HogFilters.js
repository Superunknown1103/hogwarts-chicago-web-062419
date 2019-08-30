import React, { Component } from 'react';

export default class HogFilter extends Component {
  render() {
    return (
      <div >
          <select onChange={this.props.sortHogs}>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
          </select>
            Greased
          <input type="checkbox" value="greased" name="greased" />
      </div>
    )
  }
}
