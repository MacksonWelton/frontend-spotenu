const initialState = {
  allBands: {
    numberOfRows: 0,
    bands: []
  },
  allListeners: {
    numberOfRows: 0,
    listeners: []
  }
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_BANDS":
      return {...state, allBands: action.payload.allBands};
    case "ALL_LISTENERS":
      return {...state, allListeners: action.payload.allListeners};
    default: 
    return state;
  }
}


export default users;