import { FAVORITE_RECIPE, SET_RECIPES } from "../actions";
import { combineReducers } from "redux";

function recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}
function favoriteRecipes(state = [], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      state = [...state, action.recipe];
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });
export default rootReducer;
