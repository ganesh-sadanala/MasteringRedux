import React, { Component } from "react";
import { favoriteRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };

    this.favorite = this.favorite.bind(this);
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({ favorited: true });
  }
  render() {
    let { recipe } = this.props;
    return (
      <>
        {this.props.favoriteButton ? (
          this.state.favorited ? (
            <div onClick={() => this.favorite(recipe)}>&#9733;</div>
          ) : (
            <div onClick={() => this.favorite(recipe)}>&#9734;</div>
          )
        ) : (
          <> </>
        )}

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
