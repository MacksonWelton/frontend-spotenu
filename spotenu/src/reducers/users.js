const initialState = {
  allBands: {
    numberOfRows: 0,
    bands: []
  },
  allListeners: {
    numberOfRows: 0,
    listeners: []
  },
  idUser: ""
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_BANDS":
      return {...state, allBands: action.payload.allBands};
    case "ALL_LISTENERS":
      return {...state, allListeners: action.payload.allListeners};
    case "ID_USER":
      return {...state, idUser: action.payload.idUser};
    default: 
    return state;
  }
}


export default users;