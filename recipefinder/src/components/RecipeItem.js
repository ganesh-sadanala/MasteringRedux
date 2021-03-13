import React, { Component } from "react";
import { favoriteRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <>
        <div onClick={this.props.favoriteRecipe}>&#9734;</div>
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
        <img src={recipe.thumbnail} alt={recipe.title} />
      </>
    );
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);
