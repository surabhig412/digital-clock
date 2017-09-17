import React, { Component } from 'react';

export default class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div id="clock">
        <span id="date">{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
