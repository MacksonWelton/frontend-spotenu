import axios from "axios";
const baseUrl = "http://localhost:3001";

export const AddMusicGenre = async (input)  => {
  try {

     const response = await axios.post(`${baseUrl}/add-music-genre`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}


export const AddMusicAlbum = async (input)  => {
  try {

     const response = await axios.post(`${baseUrl}/add-music-album`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}