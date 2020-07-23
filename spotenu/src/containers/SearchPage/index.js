import { Container, LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMusics, setMusicDetails } from "../../actions/music";
import ConfirmationDialogRaw from "../../components/ConfirmationDialogRaw";
import Header from "../../components/Header/index";
import Musics from "../../components/Musics";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import { routes } from "../Router";

const SearchPage = () => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedMusics, setSelectedMusics] = React.useState([]);

  const { musics, numberOfRows } = useSelector((state) => state.musics.musicsData);
  const searchedMusic = useSelector((state) => state.musics.searchedMusic);

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' }
  ];

  function createData(name, id) {
    return { name, id };
  }

  const handleChangePageToMusicDetail = (musicDetails) => {
    dispatch(setMusicDetails(musicDetails))
    history.push(routes.MusicDetailsPage)
  }

  const rows = musics.map(music => {
    return createData(
      <Typography
        className={classes.link}
        key={music.id_music}
        onClick={() => handleChangePageToMusicDetail(music)}
      >
        {music.name_music}
      </Typography>,
      music.id_music
    )
  });

  const handleClickListItem = (selected) => {
    setSelectedMusics(selected)
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };


  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        musics ?
          <>
            <Musics
              rows={rows}
              headCells={headCells}
              title={`Resultado da pesquisa para: ${searchedMusic}`}
              numberOfRows={numberOfRows}
              searchedMusic={searchedMusic}
              deleteFunction={deleteMusics}
              addPlaylist={true}
              handleClickListItem={handleClickListItem}
            />
            <ConfirmationDialogRaw
              classes={{
                paper: classes.paper,
              }}
              id="ringtone-menu"
              keepMounted
              open={open}
              onClose={handleClose}
              value={value}
              selectedMusics={selectedMusics}
            />
          </>
          :
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
      }
    </Container>
  )

}


export default SearchPage;