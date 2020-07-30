const initialState = {
  alert: {
    type: "",
    message: "",
    open: false,
  }
}

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case "ALERT":
      return {...state, alert: action.payload};
    default: 
      return state;
  }
}

export default alerts;