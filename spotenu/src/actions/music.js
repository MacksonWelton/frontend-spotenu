import axios from "axios";
import {baseUrl, getToken, getTokenAdm} from "../utils/constants";

export const AddMusicGenre = (input) => async (dispatch)  => {
  try {

     await axios.post(`${baseUrl}/musics/add-genre`, input, {
       headers: {
         authorization: getTokenAdm()
       }
     });

  } catch(err) {
    console.error(err.message)
  }
}


export const AddMusicAlbum = (input) => async (dispatch)=> {
  try {

      await axios.post(`${baseUrl}/create-album`, input, {
       headers: {
         authorization: getToken()
       }
     });

  } catch(err) {
    console.error(err.message)
  }
}

export const addMusic = (input) => async (dispatch) => {
  const token = getToken();
  try {

    await axios.post(`${baseUrl}`, input, {
      headers: {
        authorization: getToken()
      }
    })

  } catch(err) {
    console.error(err.message)
  }
}