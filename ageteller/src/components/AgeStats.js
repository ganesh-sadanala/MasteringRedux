import React, { Component } from "react";

class AgeStats extends Component {
  constructor(props) {
    super(props);
  }

  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (3600 * 1000 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;
    return `${years} years, ${months} months and ${days} days`;
  }
  render() {
    return (
      <>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
      </>
    );
  }
}

export default AgeStats;
