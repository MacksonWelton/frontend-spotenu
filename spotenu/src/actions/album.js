import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand } from "../utils/constants";
import { alert } from "./alert";

export const AddAlbum = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/albums/create-album`, input, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    });

    dispatch(alert("success", response.data, true));

    dispatch(getAllAlbums());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAllAlbums = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/albums/albums?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    })

    dispatch(setAllAlbums(response.data));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAlbumsByBand = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/albums/albums-by-band?page=${page}`, {
      headers: {
        authorization: getTokenBand()
      }
    })

    dispatch(setAlbumsByBand(response.data));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const editAlbumName = (albumId, name) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/albums/edit-album-name`, { albumId, name }, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    });

    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
    } else {
      dispatch(getAllAlbums());
    }

    dispatch(alert("success", response.data, true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const editAlbumGenres = (albumId, genresId) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/albums/edit-album-genres`, { albumId, genresId }, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    });

    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
    } else {
      dispatch(getAllAlbums());
    }

    dispatch(alert("success", response.data, true));
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const deleteAlbum = (albumId) => async (dispatch) => {
  try {

    const response = await axios.delete(`${baseUrl}/albums/delete-album/${albumId}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    })

    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
    } else {
      dispatch(getAllAlbums());
    }

    dispatch(alert("success", response.data, true));
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