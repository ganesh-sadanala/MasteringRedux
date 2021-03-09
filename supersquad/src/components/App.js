import React, { Component } from "react";
import CharacterList from "./CharacterList";
import "../styles/index.css";
import HeroList from "./HeroList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SuperSquad</h1>
        <CharacterList />
        <HeroList />
      </div>
    );
  }
}

export default App;
