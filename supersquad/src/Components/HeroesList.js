import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById } from "../actions";

class HeroesList extends Component {
  render() {
    const { heroesList, removeCharacterById } = this.props;
    return (
      <div>
        <h4>{"Heroes"}</h4>
        <ul className="list-group">
          {heroesList.length
            ? heroesList.map(item => {
                return (
                  <li key={item.id} className="list-group-item">
                    <div className="list-item">{item.name}</div>
                    <div
                      className="list-iem right-button"
                      onClick={() => removeCharacterById(item.id)}
                    >
                      x
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

const mapStateToProps = state => {
  return {
    heroesList: state.heroes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeCharacterById }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
