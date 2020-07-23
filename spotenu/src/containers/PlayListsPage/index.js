import { Container, LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist, getAllPlaylists, getPlaylistsByUser } from "../../actions/playlist";
import AddForm from "../../components/AddForm";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";
import { getTokenPremiumListener } from "../../utils/constants";

const PlaylistsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser())
    } else {
      dispatch(getAllPlaylists());
    }
  }, [dispatch]);

  const allPlaylists = useSelector((state) => state.playlists.allPlaylists.playlists);
  const numberOfRowsAllPlaylists = useSelector((state) => state.playlists.allPlaylists.numberOfRows);

  const playlistsByUser = useSelector((state) => state.playlists.playlistsByUser.playlists);
  const numberOfRowsByUser = useSelector((state) => state.playlists.playlistsByUser.numberOfRows);

  const playlists = allPlaylists.length === 0 ? playlistsByUser : allPlaylists;
  const numberOfRows = numberOfRowsAllPlaylists === 0 ? numberOfRowsByUser : numberOfRowsAllPlaylists;


  const [input, setInput] = useState({
    name: ""
  });

  const handleInput = event => {
    setInput({
      ...input, name: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createPlaylist(input))
  }

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
  ];

  function createData(name, id) {
    return { name, id };
  }

  console.log(playlists)

  const rows = playlists.map(playlist => {
    return createData(
      playlist.name_playlist, 
      playlist.id_playlist);
  })

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <AddForm
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
        name="name"
        label="Playlist"
      />
      {
        playlists.length !== 0 ?
          <EnhancedTableHead
            rows={rows}
            headCells={headCells}
            title="Playlists"
            numberOfRows={numberOfRows}
            changePage={getAllPlaylists}
            addPlaylist={false}
          />
          :
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
      }
    </Container>
  )
}

export default PlaylistsPage;