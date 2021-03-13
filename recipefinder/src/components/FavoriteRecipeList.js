import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

class FavoriteRecipeList extends Component {
  render() {
    return (
      <>
        <h4>
          <Link to="/">Home</Link>
        </h4>
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
