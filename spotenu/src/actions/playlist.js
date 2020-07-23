import axios from "axios";
import { baseUrl, getTokenAdm, getTokenFreeListener, getTokenPremiumListener } from "../utils/constants";

export const createPlaylist = (input) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/playlists/create-playlist`, input, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    })
    dispatch(getAllPlaylists())
  } catch (err) {
    console.error(err.message)
  }
}

export const addMusicToPlaylist = (idPlaylist, idMusics) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/playlists/add-music-to-playlist`, { idPlaylist, idMusics }, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    })

  } catch (err) {
    console.error(err.message)
  }
}

export const getAllPlaylists = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/playlists/all-playlists?page=${page}`, {
      headers: {
        authorization: getTokenAdm()
      }
    })

    dispatch(setAllPlaylists(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const getPlaylistsByUser = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/playlists/playlists-by-user?page=${page}`, {
      headers: {
        authorization: getTokenFreeListener() || getTokenPremiumListener()
      }
    })

    dispatch(setPlaylistsByUser(response.data))
  } catch (err) {
    console.error(err.message)
  }
}

export const setAllPlaylists = (allPlaylists) => ({
  type: "ALL_PLAYLISTS",
  payload: {
    allPlaylists
  }
})

export const setPlaylistsByUser = (playlistsByUser) => ({
  type: "PLAYLISTS_BY_USER",
  payload: {
    playlistsByUser
  }
})