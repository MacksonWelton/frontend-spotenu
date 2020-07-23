import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand } from "../utils/constants";

export const listenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/listener-signup`, input);
    window.localStorage.setItem("tokenFreeListener", response.data.tokenFreeListener);
  } catch (err) {
    console.error(err.message);
  }
}

export const bandSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/band-singup`, input);
    window.localStorage.setItem("tokenBand", response.data.tokenBand);
  } catch (err) {
    console.error(err.message);
  }
}

export const signupAdm = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/admin-signup`, input, {
      headers: {
        token: getTokenAdm()
      }
    });
    window.localStorage.setItem("tokenAdm", response.data.tokenAdm);
  } catch (err) {
    console.error(err.message);
  }
}

export const premiumListenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/premium-listener-signup`, input);
    window.localStorage.setItem("tokenPremiumListener", response.data.tokenPremiumListener);
  } catch (err) {
    console.error(err.message);
  }
}

export const login = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, input);

    if (response.data.tokenAdm) {
      window.localStorage.setItem("tokenAdm", response.data.tokenAdm);
    } else if (response.data.tokenBand) {
      window.localStorage.setItem("tokenBand", response.data.tokenBand);
    } else if (response.data.tokenFreeListener) {
      window.localStorage.setItem("tokenFreeListener", response.data.tokenFreeListener);
    } else if (response.data.tokenPremiumListener) {
      window.localStorage.setItem("tokenPremiumListener", response.data.tokenPremiumListener);
    }
  } catch (err) {
    console.error(err.message);
  }
}

export const getAllBands = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/users/all-bands?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    })

    dispatch(setAllBands(response.data))
  } catch (err) {
    console.error(err.message);
  }
}

export const getAllListeners = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/users/all-listener?page=${page}`, {
      headers: { 
        authorization: getTokenAdm()
      }
    })

    dispatch(setAllListeners(response.data))

  } catch (err) {
    console.error(err.message);
  }
}

export const promoteListener = (idListener) => async (dispatch) => {

  try {
    const response = await axios.put(`${baseUrl}/users/promote-listener`, {idListener}, {
      headers: {
        authorization: getTokenAdm()
      }
    })

    console.log(response)

    dispatch(getAllListeners())

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
  await axios.put(`${baseUrl}/users/approve-band`, { id, isApprove }, {
    headers: {
      authorization: getTokenAdm()
    }
  })

  dispatch(getAllBands())
}

export const setAllListeners = (allListeners) => ({
  type: "ALL_LISTENERS",
  payload: {
    allListeners
  }
})