import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Input your Birthday!</h1>
        <Form inline>
          <FormControl type="date"></FormControl> <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
