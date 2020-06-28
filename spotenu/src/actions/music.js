import axios from "axios";
import { baseUrl, getToken, getTokenAdm } from "../utils/constants";

export const AddMusicGenre = (input) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/musics/add-genre`, input, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(getAllGenres())

  } catch (err) {
    console.error(err.message)
  }
}


export const AddAlbum = (input) => async (dispatch) => {
  try {

    await axios.post(`${baseUrl}/musics/create-album`, input, {
      headers: {
        authorization: getToken() || getTokenAdm()
      }
    });

    dispatch(getAllAlbums());

  } catch (err) {
    console.error(err.message)
  }
}

export const getAllAlbums = () => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/musics/albums`, {
      headers: {
        authorization: getToken() || getTokenAdm()
      }
    })

    dispatch(setAllAlbums(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const getAlbumsByBand = () => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/musics/albums-by-band`, {
      headers: {
        authorization: getToken()
      }
    })

    dispatch(setAlbumsByBand(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const addMusic = (input) => async () => {
  try {

    await axios.post(`${baseUrl}/musics/add-music`, input, {
      headers: {
        authorization: getToken()
      }
    })

  } catch (err) {
    console.error(err.message)
  }
}

export const getAllGenres = () => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/musics/genres`, {
      headers: {
        authorization: getToken() || getTokenAdm()
      }
    })

    dispatch(setAllGenres(response.data))

  } catch (err) {
    console.error(err.message)
  }
}

export const getMusicsByBand = () => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/musics/musics-by-band`, {
      headers: {
        authorization: getToken() || getTokenAdm()
      }
    })

    console.log(response.data)

    dispatch(setMusicsByBand(response.data))

  } catch (err) {

  }
}

export const deleteAlbum = (id) => async (dispatch) => {
  try {

    await axios.delete(`${baseUrl}/musics/delete-album`, {
      headers: {
        authorization: getToken() || getTokenAdm()
      },
      params: {
        id
      }
    })

    dispatch(getAllAlbums(), getAlbumsByBand())

  } catch (err) {
    console.error(err.message)
  }
}

export const deleteMusic = (id) => async (dispatch) => {
  try {

    await axios.delete(`${baseUrl}/musics/delete-album`, {
      headers: {
        authorization: getToken() || getTokenAdm()
      }
    })


  } catch (err) {
    console.error(err.message)

  }
}

const setAllGenres = (allGenres) => ({
  type: "ALL_GENRES",
  payload: {
    allGenres
  }
})

const setAllAlbums = (allAlbums) => ({
  type: "ALL_ALBUMS",
  payload: {
    allAlbums
  }
})

const setAlbumsByBand = (albumsByBand) => ({
  type: "ALBUMS_BY_BANDS",
  payload: {
    albumsByBand
  }
})

const setMusicsByBand = (musicsByBand) => ({
  type: "MUSICS_BY_BANDS",
  payload: {
    musicsByBand
  }
})