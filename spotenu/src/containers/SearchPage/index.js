import { Container, LinearProgress, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteMusics, setMusicDetails } from "../../actions/music";
import ConfirmationDialogRaw from "../../components/ConfirmationDialogRaw";
import Header from "../../components/Header/index";
import MusicsSearchResults from "../../components/MusicsSearchResults";
import { getTokenAdm, getTokenPremiumListener } from "../../utils/constants";
import { routes } from "../Router";
import { useStyles } from "./style";

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
        key={music.music_id}
        onClick={() => handleChangePageToMusicDetail(music)}
      >
        {music.music_name}
      </Typography>,
      music.music_id
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
            <MusicsSearchResults
              rows={rows}
              headCells={headCells}
              title={`Resultado da pesquisa para: ${searchedMusic}`}
              numberOfRows={numberOfRows}
              searchedMusic={searchedMusic}
              deleteFunction={deleteMusics}
              addPlaylist={true}
              handleClickListItem={handleClickListItem}
              checkBox={getTokenPremiumListener() || getTokenAdm()}
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