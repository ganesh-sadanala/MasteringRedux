import characters_json from "../data/characters.json";
import { ADD_CHARACTER } from "../actions/index";

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter((character) => character.id != action.id);
    default:
      return state;
  }
}

export default characters;
