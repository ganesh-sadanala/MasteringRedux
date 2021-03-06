import React, { Component } from "react";
import CharacterList from "./CharacterList";
import "../styles/index.css";
import HeroList from "./HeroList";
import SquadStats from "./SquadStats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SuperSquad</h1>
        <CharacterList />
        <HeroList />
        <SquadStats />
      </div>
    );
  }
}

export default App;
