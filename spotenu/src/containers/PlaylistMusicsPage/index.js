import { Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setMusicDetails } from "../../actions/music";
import { deleteMusicFromPlaylist, getMusicsByPlaylist } from "../../actions/playlist";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header/index";
import { routes } from "../Router";
import { useStyles } from "./style";

const PlaylistMusicsPage = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { musics, numberOfRows } = useSelector((state) => state.playlists.musicsByPlaylist);

  useEffect(() => {
    getMusicsByPlaylist()
  }, [dispatch]);

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' }
  ];

  function createData(musicName, id) {
    return { musicName, id };
  }

  const handleChangePageToMusicDetail = (musicDetails) => {
    dispatch(setMusicDetails(musicDetails))
    history.push(routes.MusicDetailsPage)
  }

  const rows = musics.map(music => {
    return createData(
      <Typography
        className={classes.link}
        key={music.music_id}
        onClick={() => handleChangePageToMusicDetail(music)}
      >
        {music.music_name}
      </Typography>,
      music.music_id
    );
  });

  const deleteMusics = (musicsId) => {
    return deleteMusicFromPlaylist(musics[0].playlist_id, musicsId);
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <EnhancedTableHead
        rows={rows}
        headCells={headCells}
        title="Músicas"
        numberOfRows={numberOfRows}
        changePage={getMusicsByPlaylist}
        deleteFunction={deleteMusics}
        addPlaylist={false}
      />
    </Container>
  )
}


export default PlaylistMusicsPage;