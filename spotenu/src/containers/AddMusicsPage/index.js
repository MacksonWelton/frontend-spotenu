import { Box, Button, Container, FormControl, InputLabel, LinearProgress, MenuItem, OutlinedInput, TextField } from "@material-ui/core";
import clsx from 'clsx';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusic, getAllAlbums, getMusicsByBand, getAlbumsByBand } from "../../actions/music";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header/index";
import { useStyles } from "./style";
import { getToken } from "../../utils/constants";


const AddMusicsPage = () => {

  const classes = useStyles();
  const allAlbums = useSelector((state) => state.musics.allAlbums);
  const albumsByBand = useSelector((state) => state.musics.albumsByBand);

  const albums = allAlbums.length === 0 ? albumsByBand : allAlbums;
  const musics = useSelector((state) => state.musics.musicsByBand);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getToken()) {
      dispatch(getAlbumsByBand());
    } else {
      dispatch(getAllAlbums());
    }
    dispatch(getMusicsByBand())
  }, [dispatch]);

  
  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'band', numeric: true, disablePadding: false, label: 'Banda' },
  ];
  
  function createData(name) {
    return { name };
  }
  
  const rows = musics.map(music => {
    return createData(music.name_music)
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
          <EnhancedTableHead rows={rows} headCells={headCells} title="Músicas" />
          :
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
      }
    </Container>
  )

}


export default AddMusicsPage;