const initialState = {
  allBands: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_BANDS":
      return {...state, allBands: action.payload.allBands};
    default: 
    return state;
  }
}


export default users;