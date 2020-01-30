import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharactersById } from "../actions/index";

class SquadList extends Component {
  render() {
    const { charactersList, addCharactersById } = this.props;
    return (
      <div>
        <h4>{"Characters"}</h4>
        <ul className="list-group">
          {charactersList.length
            ? charactersList.map(item => {
                return (
                  <li key={item.id} className="list-group-item">
                    <div className="list-item">{item.name}</div>
                    <div
                      className="list-item right-button"
                      onClick={() => addCharactersById(item.id)}
                    >
                      +
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}

// mapStateToProps - get the state from redux store and pass the required data as props to component
const mapStateToProps = state => {
  return {
    charactersList: state.charactersList
  };
};

// mapDispatchToProps - return the action creators as prop to component. Component call the action creator which intern call the reducer function to update the state in the redux store
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addCharactersById }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadList);
