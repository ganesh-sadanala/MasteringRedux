import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: "",
      dish: "",
    };

    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDishChange = this.handleDishChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleIngredientsChange(event) {
    this.setState({
      ingredients: event.target.value,
    });
  }

  handleDishChange(event) {
    this.setState({
      dish: event.target.value,
    });
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={this.handleIngredientsChange}
            value={this.state.ingredients}
          />
        </FormGroup>{" "}
        <FormGroup>
          <FormLabel>Dish</FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={this.handleDishChange}
            value={this.state.dish}
          />
        </FormGroup>{" "}
        <Button onClick={this.search}>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
