import axios from "axios";

const baseUrl = "http://localhost:3001";

export const signup = async (input)  => {
  try {

     const response = await axios.post(`${baseUrl}/signup-listener`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}

export const login = async (input)  => {
  try {

     const response = await axios.post(`${baseUrl}/login`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}