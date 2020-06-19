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

export const signupBand = async (input)  => {
  try {
     const response = await axios.post(`${baseUrl}/signup-band`, input);
     window.localStorage.setItem("token", response.data);

  } catch(err) {
    console.error(err.message)
  }
}

export const signupAdm = async (input) => {
  try {
    const response = await axios.post(`${baseUrl}/signup-adm`, input, {
      header: {
        token: input.token
      }
    });
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