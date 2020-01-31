import { combineReducers } from "redux";
import { GET_MEMES, NEW_MEME } from "../actions";

const memes = (state = [], action) => {
  switch (action.type) {
    case GET_MEMES:
      return action.memes;
    default:
      return state;
  }
};

const myMeme = (state = [], action) => {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  memes,
  myMeme
});

export default rootReducer;
