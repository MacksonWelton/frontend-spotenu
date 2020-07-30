import axios from "axios";
import { baseUrl, getTokenAdm, getTokenBand, getTokenPremiumListener, getTokenFreeListener } from "../utils/constants";
import { alert } from "./alert";

export const listenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/listener-signup`, input);

    window.localStorage.setItem("tokenFreeListener", response.data.tokenFreeListener);

    dispatch(alert("success", "Cadastro feito com sucesso!", true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const bandSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/band-singup`, input);

    window.localStorage.setItem("tokenBand", response.data.tokenBand);

    dispatch(alert("success", "Cadastro feito com sucesso!", true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
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

    dispatch(alert("success", "Cadastro feito com sucesso!", true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const premiumListenerSignup = (input) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/premium-listener-signup`, input);

    window.localStorage.setItem("tokenPremiumListener", response.data.tokenPremiumListener);

    dispatch(alert("success", "Cadastro feito com sucesso!", true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
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

    dispatch(alert("success", "Login feito com sucesso!", true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const getAllBands = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/users/all-bands?page=${page}`, {
      headers: {
        authorization: getTokenBand() || getTokenAdm()
      }
    });

    dispatch(setAllBands(response.data))
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const getAllListeners = (page) => async (dispatch) => {
  try {

    const response = await axios.get(`${baseUrl}/users/all-listener?page=${page}`, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(setAllListeners(response.data))

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const promoteListener = (idListener) => async (dispatch) => {

  try {
    const response = await axios.put(`${baseUrl}/users/promote-listener`, { idListener }, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(alert("success", response.data, true));

    dispatch(getAllListeners())

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const getIdUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users/id-user`, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener()
      }
    });

    dispatch(setIdUser(response.data));
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const editUserName = (name) => async (dispatch) => {
  try {

    const response = await axios.put(`${baseUrl}/users/edit-user-name`, { name }, {
      headers: {
        authorization: getTokenAdm() || getTokenPremiumListener() || getTokenFreeListener() || getTokenBand()
      }
    });

    dispatch(alert("success", response.data, true));

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true))
  }
}

export const approveBands = (bandId, isApprove = true) => async (dispatch) => {
  try {

    const response = await axios.put(`${baseUrl}/users/approve-band`, { bandId, isApprove }, {
      headers: {
        authorization: getTokenAdm()
      }
    });

    dispatch(alert("success", response.data, true));

    dispatch(getAllBands());

  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const approveListener = (listenerId, isApprove = true) => async (dispatch) => {
  try {

    const response = await axios.put(`${baseUrl}/users/approve-listener`, {listenerId, isApprove}, {
      headers: {
        authorization: getTokenAdm()
      }
    })

    dispatch(alert("success", response.data, true));

    dispatch(getAllListeners());
    
  } catch (err) {
    console.error(err.message);
    dispatch(alert("error", err.response.data.message, true));
  }
}

export const setAllBands = (allBands) => ({
  type: "ALL_BANDS",
  payload: {
    allBands
  }
});

export const setAllListeners = (allListeners) => ({
  type: "ALL_LISTENERS",
  payload: {
    allListeners
  }
});

export const setIdUser = (idUser) => ({
  type: "ID_USER",
  payload: {
    idUser
  }
});