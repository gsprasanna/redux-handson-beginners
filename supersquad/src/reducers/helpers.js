import charactersJsonData from "../data/SquadCharacters.json";

function createCharacters(id) {
  let character = charactersJsonData.find(item => item.id === id);
  return character;
}

export default createCharacters;
