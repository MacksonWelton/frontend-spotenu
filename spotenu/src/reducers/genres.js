const initialState = {
  allGenres: {
    numberOfRows: 0,
    genres: []
  },
}

const genres = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_GENRES":
      return { ...state, allGenres: action.payload.allGenres };
    default:
      return state;
  }
}

export default genres;