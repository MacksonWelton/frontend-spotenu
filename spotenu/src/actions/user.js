import axios from "axios";
import { baseUrl, getToken, getTokenAdm } from "../utils/constants";
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
    dispatch(push(routes.HomePage));
  } catch (err) {
    console.error(err.message);
  }
}

export const signupAdm = (input) => async (dispatch)=> {
  const token = getToken();
  try {
    const response = await axios.post(`${baseUrl}/users/admin-signup`, input, {
      headers: {
        token: token
      }
    });
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.HomePage));
  } catch (err) {
    console.error(err.message);
  }
}

export const premiumListenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/premium-listener-signup`, input);
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.HomePage));
  } catch (err) {
    console.error(err.message);
  }
}

export const login = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, input);
    if (response.data.token) {
      window.localStorage.setItem("token", response.data.token);
    } else {
      window.localStorage.setItem("tokenAdm", response.data.tokenAdm)
    }
    dispatch(push(routes.HomePage));
  } catch (err) {
    console.error(err.message);
  }
}

export const getAllBands = () => async (dispatch) => {
  let token;
  if (getToken()) {
    token = getToken();
  } else {
    token = getTokenAdm();
  }
  
  try {

    const response = await axios.get(`${baseUrl}/users/all-bands`, {
      headers: { 
        authorization: token
      }
    })

    dispatch(setAllBands(response.data))
  } catch (err) {
    console.error(err.message);
  }
}

export const setAllBands = (allBands) => ({
  type: "ALL_BANDS",
  payload: {
    allBands
  }
})

export const approveBands = (id, isApprove = true) => async (dispatch) => {
  await axios.put(`${baseUrl}/users/approve-band`, {id, isApprove}, { 
    headers: {
      authorization: getTokenAdm()
    }
  })

  dispatch(getAllBands())
}