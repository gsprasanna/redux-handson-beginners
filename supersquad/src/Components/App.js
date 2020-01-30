import React from "react";
import SquadList from "./SquadList";

import "../Styles/index.css";
import HeroesList from "./HeroesList";
import SquadStats from "./SquadStats";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>{"SuperSquad"}</h2>
        <div className="row">
          <div className="col-md-4">
            <SquadList />
          </div>
          <div className="col-md-4">
            <HeroesList />
          </div>
          <div className="col-md-4">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
