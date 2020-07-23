import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand, getTokenFreeListener, getTokenPremiumListener } from "../utils/constants";

export const AddMusicGenre = (input) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/genres/add-genre`, input, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(getAllGenres())

  } catch (err) {
    console.error(err.message)
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
    console.error(err.message)
  }
}

export const setAllGenres = (allGenres) => ({
  type: "ALL_GENRES",
  payload: {
    allGenres
  }
})