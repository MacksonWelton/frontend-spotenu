import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand } from "../utils/constants";

export const AddAlbum = (input) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/albums/create-album`, input, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    });

    dispatch(getAllAlbums());

  } catch (err) {
    console.error(err.message)
  }
}

export const getAllAlbums = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/albums/albums?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    })

    dispatch(setAllAlbums(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const getAlbumsByBand = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/albums/albums-by-band?page=${page}`, {
      headers: {
        authorization: getTokenBand()
      }
    })

    dispatch(setAlbumsByBand(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const deleteAlbum = (id) => async (dispatch) => {
  try {

    await axios.delete(`${baseUrl}/albums/delete-album/${id}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    })

    if (getTokenBand()) {
      dispatch(getAlbumsByBand())
    } else {
      dispatch(getAllAlbums())
    }
  } catch (err) {
    console.error(err.message)
  }
}

export const setAllAlbums = (allAlbums) => ({
  type: "ALL_ALBUMS",
  payload: {
    allAlbums
  }
})

export const setAlbumsByBand = (albumsByBand) => ({
  type: "ALBUMS_BY_BANDS",
  payload: {
    albumsByBand
  }
})