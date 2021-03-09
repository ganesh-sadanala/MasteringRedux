import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions";

class HeroList extends Component {
  constructor(props) {
    super(props);
    console.log("h-this.props", this.props);
  }
  render() {
    return (
      <div>
        <h4>Hero Squad</h4>
        <ul>
          {this.props.heroes.map((hero) => (
            <li key={hero.id}>
              <div className="list-item">{hero.name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToprops(state) {
  console.log("h-state", state);
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToprops, { addCharacterById })(HeroList);
