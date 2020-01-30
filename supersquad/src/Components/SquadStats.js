import React from "react";
import { connect } from "react-redux";

class SquadStats extends React.Component {
  strength = () => {
    let strength = this.props.heroes.reduce((strength, item) => {
      debugger;
      return (strength += item.strength);
    }, 0);
    return strength;
  };

  intelligence = () => {
    let intelligence = this.props.heroes.reduce((intelligence, item) => {
      debugger;
      return (intelligence += item.intelligence);
    }, 0);
    return intelligence;
  };

  speed = () => {
    let speed = this.props.heroes.reduce((speed, item) => {
      debugger;
      return (speed += item.speed);
    }, 0);
    return speed;
  };

  render() {
    return (
      <div>
        <h4>SquadStats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength : </b>
            {this.strength()}
          </li>
          <li className="list-group-item">
            <b>Overall intelligence : </b>
            {this.intelligence()}
          </li>
          <li className="list-group-item">
            <b>Overall Speed : </b>
            {this.speed()}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};

export default connect(mapStateToProps, null)(SquadStats);
