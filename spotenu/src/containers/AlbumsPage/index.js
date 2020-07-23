import { Box, Button, Checkbox, Container, FormControl, Input, InputLabel, LinearProgress, ListItemText, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../../actions/genre";
import { AddAlbum, getAllAlbums, getAlbumsByBand, deleteAlbum } from "../../actions/album";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";
import { getTokenBand } from "../../utils/constants";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AlbumsPage = () => {
  const classes = useStyles();

  const { genres } = useSelector((state) => state.genres.allGenres);
  const allAlbums = useSelector((state) => state.albums.allAlbums);
  const albumsByBand = useSelector((state) => state.albums.albumsByBand);

  const albums = allAlbums.albums.length === 0 ? albumsByBand.albums : allAlbums.albums;
  const numberOfRows = allAlbums.numberOfRows === 0 ? albumsByBand.numberOfRows : allAlbums.numberOfRows;

  const dispatch = useDispatch();

  useEffect(() => {
    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
    } else {
      dispatch(getAllAlbums());
    }
    dispatch(getAllGenres());
  }, [dispatch]);

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'band', numeric: true, disablePadding: false, label: 'Banda' },
  ];

  function createData(name, band, id) {
    return { name, band, id };
  }

  const rows = albums.map(album => {
    return createData(album.album_name, album.name, album.id_album)
  });

  const [input, setInput] = useState({
    name: "",
    genres: []
  });

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({
      ...input, [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(AddAlbum(input))
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Gêneros</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            multiple
            name="genres"
            value={input.genres}
            onChange={handleChangeInput}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {genres.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                <Checkbox checked={input.genres.indexOf(option.name) > -1} />
                <ListItemText primary={option.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className={classes.box}>
          <Button className={classes.submitButton} variant="contained" color="primary" type="submit">Adicionar</Button>
        </Box>
      </form>
      {
        genres ?
          <EnhancedTableHead 
            rows={rows} 
            headCells={headCells} 
            title="Álbuns" 
            numberOfRows={numberOfRows}
            changePage={allAlbums.albums.length === 0 ? getAlbumsByBand : getAllAlbums}
            deleteFunction={deleteAlbum}
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

export default AlbumsPage;