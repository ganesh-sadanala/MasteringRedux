import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    console.log("this.props", this.props);
  }

  render() {
    return (
      <div>
        <h2>Recipe List</h2>
        {this.props.recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} favoriteButton={true} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
