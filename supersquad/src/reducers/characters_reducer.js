import charactersJsonData from "../data/SquadCharacters.json";
import { ADD_CHARACTERS, REMOVE_CHARACTERS } from "../actions/index.js";
import createCharacters from "./helpers.js";

function charactersList(state = charactersJsonData, action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      return state.filter(item => item.id !== action.id);
    case REMOVE_CHARACTERS:
      return [...state, createCharacters(action.id)];
    default:
      return state;
  }
}

export default charactersList;
