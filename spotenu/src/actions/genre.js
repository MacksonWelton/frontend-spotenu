import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand, getTokenFreeListener, getTokenPremiumListener } from "../utils/constants";
import { alert } from "./alert";

export const AddMusicGenre = (input) => async (dispatch) => {
  try {

    const response = await axios.post(`${baseUrl}/genres/add-genre`, input, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(alert("success", response.data, true));

    dispatch(getAllGenres());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAllGenres = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/genres/genres?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm() || getTokenFreeListener() || getTokenPremiumListener()
      }
    })

    dispatch(setAllGenres(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const deleteGenre = (genresId) => async (dispatch) => {
  try {

    const response = await axios.delete(`${baseUrl}/genres/delete-genre/${genresId}`, {
      headers: {
        authorization: getTokenAdm()
      }
    })

    dispatch(alert("success", response.data, true));

    dispatch(getAllGenres());
    
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const setAllGenres = (allGenres) => ({
  type: "ALL_GENRES",
  payload: {
    allGenres
  }
})