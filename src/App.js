import React, { Component } from 'react';
import DigitalClock from './DigitalClock';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Digital clock</h1>
        <DigitalClock />
      </div>
    );
  }
}
