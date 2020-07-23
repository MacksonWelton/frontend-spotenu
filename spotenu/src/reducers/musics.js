const initialState = {
  allGenres: {
    numberOfRows: 0,
    genres: []
  },
  allAlbums: {
    numberOfRows: 0,
    albums: []
  },
  albumsByBand: {
    numberOfRows: 0,
    albums: []
  },
  musicsByBand: {
    numberOfRows: 0,
    musics: []
  },
  musicsData: {
    numberOfRows: 0,
    musics: []
  },
  allMusics: {
    numberOfRows: 0,
    musics: []
  },
  allPlaylists: {
    numberOfRows: 0,
    playlists: []
  },
  playlistsByUser: {
    numberOfRows: 0,
    playlists: []
  },
  searchedMusic: "",
  musicDetails: {}
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
      return {...state, musicsByBand: action.payload.musicsByBand};
    case "MUSIC_SEARCH_RESULTS":
      return {...state, musicsData: action.payload.musicsData, searchedMusic: action.payload.searchedMusic};
    case "ALL_MUSICS":
      return {...state, allMusics: action.payload.allMusics};
    case "ALL_PLAYLISTS":
      return {...state, allPlaylists: action.payload.allPlaylists};
    case "PLAYLISTS_BY_USER":
      return {...state, allPlaylistsByUser: action.payload.allPlaylistsByUser};
    case "MUSIC_DETAILS":
      return {...state, musicDetails: action.payload.musicDetails};
    default: 
    return state;
  }
}

export default musics;