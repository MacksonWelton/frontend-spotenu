import axios from "axios";
import { baseUrl, getTokenAdm, getTokenFreeListener, getTokenPremiumListener } from "../utils/constants";
import { alert } from "./alert";

export const createPlaylist = (input) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/playlists/create-playlist`, input, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    });

    dispatch(getAllPlaylists());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const addMusicToPlaylist = (playlistId, musicsId) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/playlists/add-music-to-playlist`, { playlistId, musicsId }, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    });

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAllPlaylists = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/playlists/all-playlists?page=${page}`, {
      headers: {
        authorization: getTokenAdm()
      }
    })

    dispatch(setAllPlaylists(response.data));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
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
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getMusicsByPlaylist = (playlistId, page) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/playlists/musics-by-playlist?playlistId=${playlistId}&page=${page}`, {
      headers: {
        authorization: getTokenPremiumListener() || getTokenAdm()
      }
    })

    dispatch(setMusicsByPlaylist(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getCollaborativePlaylists = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/playlists/collaborative-playlists?page=${page}`, {
      headers: {
        authorization: getTokenPremiumListener() || getTokenAdm()
      }
    })

    dispatch(setCollaborativePlaylists(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const editPlaylistName = (playlistId, playlistName) => async (dispatch) => {
  try {
    await axios.put(`${baseUrl}/playlists/edit-playlist-name`, { playlistId, playlistName }, {
      headers: {
        authorization: getTokenPremiumListener() || getTokenAdm()
      }
    })

    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser())
    } else {
      dispatch(getAllPlaylists())
    }
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const makePlaylistCollaborative = (playlistId, idOwner, isPrivate) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/playlists/make-playlist-collaborative`, { playlistId, idOwner, isPrivate }, {
      headers: {
        authorization: getTokenPremiumListener() || getTokenAdm()
      }
    });

    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser());
    } else {
      dispatch(getAllPlaylists());
    }
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const followCollaborativePlaylist = (playlistId) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/playlists/follow-collaborative-playlist`, { playlistId }, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    });

    dispatch(getCollaborativePlaylists());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const deleteMusicFromPlaylist = (playlistId, musicsId) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/playlists/delete-musics-from-playlist/${playlistId}/${musicsId}`, {
      headers: {
        authorization: getTokenPremiumListener() || getTokenAdm()
      }
    });

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
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

export const setMusicsByPlaylist = (musicsByPlaylist) => ({
  type: "MUSICS_BY_PLAYLIST",
  payload: {
    musicsByPlaylist
  }

})

export const setCollaborativePlaylists = (collaborativePlaylists) => ({
  type: "COLLABORATIVE_PLAYLISTS",
  payload: {
    collaborativePlaylists
  }
})