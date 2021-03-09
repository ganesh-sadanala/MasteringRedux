import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions";
import "../styles/index.css";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    console.log("c-this.props", this.props);
  }

  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {this.props.characters.map((character) => (
            <li key={character.id}>
              <div className="list-item">{character.name}</div>
              <div
                className="list-item right-button"
                onClick={() => this.props.addCharacterById(character.id)}
              >
                +
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("c-state", state);
  return {
    characters: state.characters,
  };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
