import axios from "axios";
import { baseUrl, getToken } from "../utils/constants";
import {push} from "connected-react-router";
import {routes} from "../containers/Router";


export const listenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/listener-signup`, input);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.HomePage))
  } catch (err) {
    console.error(err.message);
  }
}

export const bandSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/band-singup`, input);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.BandSignupPage))
  } catch (err) {
    console.error(err.message);
  }
}

export const signupAdm = (input) => async (dispatch)=> {
  const token = getToken();
  try {
    const response = await axios.post(`${baseUrl}/users/admin-signup`, input, {
      header: {
        token: token
      }
    });

    window.localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.error(err.message);
  }
}

export const premiumListenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/premium-listener-signup`, input);
    window.localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.error(err.message);
  }
}

export const login = (input) => async (dispatch) => {
  try {
    console.log(input)
    const response = await axios.post(`${baseUrl}/users/login`, input);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.HomePage));
  } catch (err) {
    console.error(err.message);
  }
}