import axios from "axios";

const baseUrl = "http://localhost:3001/signup-listener"

export const signup = async (input)  => {
  try {

     const response = await axios.post(`${baseUrl}`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}