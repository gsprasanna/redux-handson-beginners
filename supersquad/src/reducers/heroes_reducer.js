import { ADD_CHARACTERS, REMOVE_CHARACTERS } from "../actions/index.js";
import createCharacters from "./helpers";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      return [...state, createCharacters(action.id)];
    case REMOVE_CHARACTERS:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default heroes;
