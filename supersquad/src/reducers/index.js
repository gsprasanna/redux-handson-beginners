import { combineReducers } from "redux";
import charactersList from "./characters_reducer";
import heroes from "./heroes_reducer";

const rootReducer = combineReducers({
  charactersList,
  heroes
});

export default rootReducer;
