import { Box, Button, Container, FormControl, InputLabel, LinearProgress, MenuItem, OutlinedInput, TextField } from "@material-ui/core";
import clsx from 'clsx';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusic, getAllAlbums, getMusicsByBand, getAlbumsByBand, getAllMusics, deleteMusics } from "../../actions/music";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header/index";
import { useStyles } from "./style";
import { getTokenBand } from "../../utils/constants";


const PlaylistMusicsPage = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.allAlbums.albums);
  const albumsByBand = useSelector((state) => state.albums.albumsByBand.albums);
  const albums = allAlbums.length === 0 ? albumsByBand : allAlbums;

  const musicsByBand = useSelector((state) => state.musics.musicsByBand.musics);
  const numberOfRowsByBand = useSelector((state) => state.musics.musicsByBand.numberOfRows);

  const allMusics = useSelector((state) => state.musics.allMusics.musics);
  const numberOfRowsAllMusics = useSelector((state) => state.musics.allMusics.numberOfRows);

  let musics = allMusics.length === 0 ? musicsByBand : allMusics;
  let numberOfRows = numberOfRowsAllMusics === 0 ? numberOfRowsByBand : numberOfRowsAllMusics;

  useEffect(() => {
    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
      dispatch(getMusicsByBand());
    } else {
      dispatch(getAllAlbums());
      dispatch(getAllMusics());
    }
  }, [dispatch]);

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'band', numeric: true, disablePadding: false, label: 'Banda' },
  ];

  function createData(musicName, bandName, id) {
    return { musicName, bandName, id };
  }

  const rows = musics.map(music => {
    return createData(music.name_music, music.name, music.id_music);
  });

  const [input, setInput] = useState({
    name: "",
    album: "",
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addMusic(input));
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="name">Nome</InputLabel>
          <OutlinedInput
            id="name"
            name="name"
            label="Nome"
            type="text"
            required
            onChange={handleChangeInput}
            value={input.name}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <TextField
            id="outlined-select-currency"
            select
            name="album"
            label="Álbum"
            value={input.album}
            onChange={handleChangeInput}
            helperText="Selecione um álbum "
            variant="outlined"
          >
            {albums.map((option) => (
              <MenuItem key={option.id_album} value={option.album_name}>
                {option.album_name}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Box className={classes.box}>
          <Button className={classes.submitButton} variant="contained" color="primary" type="submit">Adicionar</Button>
        </Box>
      </form>
      {
        musics ?
          <EnhancedTableHead
            rows={rows}
            headCells={headCells}
            title="Músicas"
            numberOfRows={numberOfRows}
            changePage={allMusics.length === 0 ? getMusicsByBand : getAllMusics}
            deleteFunction={deleteMusics}
            addPlaylist={true}
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


export default PlaylistMusicsPage;