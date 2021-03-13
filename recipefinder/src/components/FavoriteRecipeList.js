import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class FavoriteRecipeList extends Component {
  render() {
    return (
      <>
        <h4>Favorite Recipe List</h4>
        {this.props.favoriteRecipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
          );
        })}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes,
  };
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
