import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "06/09/1999",
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleDateChange(event) {
    this.setState({
      newDate: event.target.value,
    });
  }

  handleButtonClick() {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
    });
  }
  render() {
    return (
      <div>
        <h1>Input your Birthday!</h1>
        <Form inline>
          <FormControl
            value={this.state.newDate}
            type="date"
            onChange={this.handleDateChange}
          ></FormControl>
          <Button onClick={this.handleButtonClick}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
