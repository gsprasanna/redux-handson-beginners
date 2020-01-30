export const ADD_CHARACTERS = "ADD_CHARACTER";
export const REMOVE_CHARACTERS = "REMOVE_CHARACTER";

export function addCharactersById(id) {
  const action = {
    type: ADD_CHARACTERS,
    id
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTERS,
    id
  };
  return action;
}
