import React from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText
} from "react-bootstrap";
import MyMemes from "./MyMemes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    };
  }
  render() {
    return (
      <div>
        <h1>
          <u>Meme Generator</u>
        </h1>
        <h4>
          <i>Write meme text</i>
        </h4>
        <MyMemes />
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>
            <FormControl
              type={"text"}
              onChange={event => this.setState({ text0: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Bottom</FormLabel>
            <FormControl
              type={"text"}
              onChange={event => this.setState({ text1: event.target.value })}
            />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <div
          className="meme-button"
          onClick={() =>
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }
        >
          Load 10 more memes ...
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(App);
