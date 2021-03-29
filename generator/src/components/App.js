import React, { Component } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: "",
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator</h2>
        <h4>Write Some Text</h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text0: event.target.value })}
              value={this.state.text0}
            ></FormControl>{" "}
          </FormGroup>
          {"  "}
          <FormGroup>
            <FormLabel>Bottom</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text1: event.target.value })}
              value={this.state.text1}
            ></FormControl>{" "}
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} />;
        })}
        <div
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
