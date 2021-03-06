import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand, getTokenFreeListener, getTokenPremiumListener } from "../utils/constants";
import { alert } from "./alert";

export const addMusic = (input) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/musics/add-music`, input, {
      headers: {
        authorization: getTokenBand()
      }
    })

    if (getTokenBand()) {
      dispatch(getMusicsByBand());
    } else {
      dispatch(getAllMusics());
    }
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getMusicsByBand = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/musics/musics-by-band?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm() || getTokenFreeListener() || getTokenPremiumListener()
      }
    });

    dispatch(setMusicsByBand(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const searchMusics = (musicName, page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/musics/search?music=${musicName}&page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm() || getTokenFreeListener() || getTokenPremiumListener()
      }
    });

    dispatch(setSearchMusics(response.data, musicName))

  } catch (err) {
    console.error(err.message)
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAllMusics = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/musics/all-musics?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm() || getTokenFreeListener() || getTokenPremiumListener()
      }
    });

    dispatch(setAllMusics(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const editMusicName = (musicName, musicId) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/musics/edit-music-name`, {musicName, musicId}, {
      headers: {
        authorization: getTokenAdm() || getTokenBand()
      }
    });

    dispatch(alert("success", response.data, true));

    dispatch(getAllMusics());

    dispatch(getMusicsByBand());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data))
  }
}

export const deleteMusics = (musicsId) => async (dispatch) => {
  try {

    await axios.delete(`${baseUrl}/musics/delete-music/${musicsId}`, {
      headers: {
        authorization: getTokenAdm() || getTokenBand()
      }
    })

    if (getTokenBand()) {
      dispatch(getMusicsByBand())
    } else {
      dispatch(getTokenAdm())
    }

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
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

export const setMusicsByBand = (musicsByBand) => ({
  type: "MUSICS_BY_BANDS",
  payload: {
    musicsByBand
  }
})

export const setSearchMusics = (musicsData, searchedMusic) => ({
  type: "MUSIC_SEARCH_RESULTS", 
  payload: {
    musicsData,
    searchedMusic
  }
})

export const setAllMusics = (allMusics) => ({
  type: "ALL_MUSICS",
  payload: {
    allMusics
  }
})

export const setMusicDetails = (musicDetails) => ({
  type: "MUSIC_DETAILS",
  payload: {
    musicDetails
  }
})