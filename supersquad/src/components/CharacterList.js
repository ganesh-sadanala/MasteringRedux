import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterById } from "../actions";
import characters from "../reducers/characters_reducer";
import "../styles/index.css";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    console.log("this.props", this.props);
  }
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {this.props.characters.map((character) => {
            return (
              <li key={character.id}>
                <div className="list-item">{character.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(character.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    characters: state.characters,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
