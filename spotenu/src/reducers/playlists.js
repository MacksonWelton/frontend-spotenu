const initialState = {
  allPlaylists: {
    numberOfRows: 0,
    playlists: []
  },
  playlistsByUser: {
    numberOfRows: 0,
    playlists: []
  },
}

const playlists = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PLAYLISTS":
      return {...state, allPlaylists: action.payload.allPlaylists};
    case "PLAYLISTS_BY_USER":
      return {...state, allPlaylistsByUser: action.payload.allPlaylistsByUser};
    default: 
      return state;
  }
}

export default playlists;