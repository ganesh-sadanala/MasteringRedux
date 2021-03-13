import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    console.log("this.props", this.props);
  }

  render() {
    return (
      <div>
        <h2>Recipe List</h2>
        {this.props.recipes.map((recipe, index) => {
          return <h4 key={index}>{recipe.title}</h4>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
