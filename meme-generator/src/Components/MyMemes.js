import React from "react";
import { connect } from "react-redux";

class MyMemes extends React.Component {
  render() {
    return (
      <div>
        {this.props.myMeme.map((meme, index) => {
          return (
            <img
              src={meme.data.url}
              alt={"my-meme"}
              key={index}
              className="my-meme-image"
            />
          );
        })}
      </div>
    );
  }
}

const mapSateToProps = state => {
  return {
    myMeme: state.myMeme
  };
};

export default connect(mapSateToProps, null)(MyMemes);
