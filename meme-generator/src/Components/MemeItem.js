import React from "react";
import { createMeme } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MemeItem extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }
  postMeme() {
    console.log("this.props", this.props);
    const { text0, text1 } = this.props;
    const newMemeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    };
    this.props.createMeme(newMemeObj);
  }
  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
        />
        <p className={this.state.hovered ? "meme-text" : "no-text"}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createMeme }, dispatch);
};

export default connect(null, mapDispatchToProps)(MemeItem);
