import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton, Input,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAlbum, deleteAlbum, editAlbumGenres, editAlbumName, getAlbumsByBand, getAllAlbums } from "../../actions/album";
import { getAllGenres } from "../../actions/genre";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import FormDialog from "../../components/FormDialog";
import Header from "../../components/Header";
import { getTokenBand } from "../../utils/constants";
import { useStyles } from "./style";

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

  const [open, setOpen] = React.useState(false);

  const [input, setInput] = React.useState({
    name: "",
    genres: []
  });

  const [inputEdit, setInputEdit] = React.useState({
    name: "",
    genres: []
  });

  const [albumId, setAlbumId] = React.useState();

  const handleClickOpen = (albumId) => {
    setAlbumId(albumId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleEditAlbum = (event) => {
    event.preventDefault();

    if (inputEdit.name.trim()) {
      dispatch(editAlbumName(albumId, inputEdit.name))
    }

    if (inputEdit.genres.length > 0) {
      dispatch(editAlbumGenres(albumId, inputEdit.genres))
    }

    setOpen(false);
  };

  const { genres } = useSelector((state) => state.genres.allGenres);
  const allAlbums = useSelector((state) => state.albums.allAlbums);
  const albumsByBand = useSelector((state) => state.albums.albumsByBand);

  const albums = allAlbums.albums.length === 0 ? albumsByBand.albums : allAlbums.albums;
  const numberOfRows = allAlbums.numberOfRows === 0 ? albumsByBand.numberOfRows : allAlbums.numberOfRows;

  const dispatch = useDispatch();

  React.useEffect(() => {
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
    { id: 'edit', numeric: true, disablePadding: false, label: 'Editar' }
  ];

  function createData(name, band, edit, id) {
    return { name, band, edit, id };
  }

  const rows = albums.map(album => {
    return createData(
      album.album_name,
      album.name,
      <IconButton aria-label="delete" onClick={() => handleClickOpen(album.album_id)}>
        <EditOutlined />
      </IconButton>
      ,
      album.album_id)
  });

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({
      ...input, [name]: value
    })
  }

  const handleChangeInputEdit = event => {
    const { name, value } = event.target;
    setInputEdit({
      ...inputEdit, [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(AddAlbum(input))
  }

  const formEditAlbum =
    <form className={classes.form}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="name">Nome</InputLabel>
        <OutlinedInput
          id="name"
          name="name"
          label="Nome"
          type="text"
          required
          onChange={handleChangeInputEdit}
          value={inputEdit.name}
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
          value={inputEdit.genres}
          onChange={handleChangeInputEdit}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              <Checkbox checked={inputEdit.genres.indexOf(option.name) > -1} />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>;

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
      <EnhancedTableHead
        rows={rows}
        headCells={headCells}
        title="Álbuns"
        numberOfRows={numberOfRows}
        changePage={allAlbums.albums.length === 0 ? getAlbumsByBand : getAllAlbums}
        deleteFunction={deleteAlbum}
        addPlaylist={false}
      />
      <FormDialog
        handleClose={handleClose}
        title="Editar Album"
        open={open}
        forms={formEditAlbum}
        handleEdit={handleEditAlbum}
      />
    </Container>
  )
}

export default AlbumsPage;