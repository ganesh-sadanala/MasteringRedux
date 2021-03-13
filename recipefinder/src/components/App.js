import React, { Component } from "react";
import RecipeList from "./RecipeList";
import SearchRecipes from "./SearchRecipes";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
