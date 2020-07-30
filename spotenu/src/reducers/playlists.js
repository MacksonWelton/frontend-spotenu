const initialState = {
  allPlaylists: {
    numberOfRows: 0,
    playlists: [],
  },
  playlistsByUser: {
    numberOfRows: 0,
    playlists: []
  },
  collaborativePlaylists: {
    numberOfRows: 0,
    playlists: []
  },
  musicsByPlaylist: {
    numberOfRows: 0,
    musics: []
  }
}

const playlists = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PLAYLISTS":
      return {...state, allPlaylists: action.payload.allPlaylists};
    case "PLAYLISTS_BY_USER":
      return {...state, playlistsByUser: action.payload.playlistsByUser};
    case "MUSICS_BY_PLAYLIST":
      return {...state, musicsByPlaylist: action.payload.musicsByPlaylist};
    case "COLLABORATIVE_PLAYLISTS":
      return {...state, collaborativePlaylists: action.payload.collaborativePlaylists}
    default: 
      return state;
  }
}

export default playlists;