import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followCollaborativePlaylist, getCollaborativePlaylists } from "../../actions/playlist";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const CollaborativePlaylists = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollaborativePlaylists())
  }, [dispatch]);

  const { playlists, numberOfRows } = useSelector((state) => state.playlists.collaborativePlaylists);

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'follow', numeric: true, disablePadding: true, label: 'Seguir' }
  ];

  function createData(name, id) {
    return { name, id };
  }

  const handleFollowCollaborativePlaylist = (playlist_id) => {
    dispatch(followCollaborativePlaylist(playlist_id))
  }

  const rows = playlists.map(playlist => {
    return createData(
      playlist.name_playlist
      ,
      <Button onClick={() => handleFollowCollaborativePlaylist(playlist.playlist_id)} color="primary">
        Seguir
      </Button>
      ,
      playlist.playlist_id);
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <EnhancedTableHead
        rows={rows}
        headCells={headCells}
        title="Playlists Colaborativas"
        numberOfRows={numberOfRows}
        changePage={getCollaborativePlaylists}
        addPlaylist={false}
      />
    </Container>
  )
}

export default CollaborativePlaylists;