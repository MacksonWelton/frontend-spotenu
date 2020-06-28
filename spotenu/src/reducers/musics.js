const initialState = {
  allGenres: [],
  allAlbums: [],
  albumsByBand: [],
  musicsByBand: [],
}

const musics = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_GENRES":
      return {...state, allGenres: action.payload.allGenres};
    case "ALL_ALBUMS":
      return {...state, allAlbums: action.payload.allAlbums};
    case "ALBUMS_BY_BANDS":
      return {...state, albumsByBand: action.payload.albumsByBand};
    case "MUSICS_BY_BANDS":
      console.log(action.payload.musicsByBand)
      return {...state, musicsByBand: action.payload.musicsByBand}
    default: 
    return state;
  }
}

export default musics;