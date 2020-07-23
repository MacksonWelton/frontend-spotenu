const initialState = {
  allAlbums: {
    numberOfRows: 0,
    albums: []
  },
  albumsByBand: {
    numberOfRows: 0,
    albums: []
  },
}

const albums = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_ALBUMS":
      return {...state, allAlbums: action.payload.allAlbums};
    case "ALBUMS_BY_BANDS":
      return {...state, albumsByBand: action.payload.albumsByBand};
    default: 
    return state;
  }
}

export default albums;