import fetchData from "../Services/fetchData";
import { username, password } from "../secretkeys";
export const GET_MEMES = "GET_MEMES";
export const NEW_MEME = "NEW_MEME";

const retreiveMemes = json => {
  const { memes } = json.data;

  return {
    type: GET_MEMES,
    memes
  };
};

const fetchMemesJson = () => {
  return fetch("https://api.imgflip.com/get_memes").then(response =>
    response.json()
  );
};

export const fetchMemes = () => {
  return function(dispatch) {
    return fetchMemesJson().then(data => dispatch(retreiveMemes(data)));
  };
};

const newMeme = meme => {
  const action = {
    type: NEW_MEME,
    meme
  };
  return action;
};

const postMemeJson = params => {
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");

  console.log("bodyParams", bodyParams);

  return fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: bodyParams
  }).then(response => response.json());
};

export const createMeme = memeObj => {
  return function(dispatch) {
    return postMemeJson(memeObj).then(data => dispatch(newMeme(data)));
  };
};
