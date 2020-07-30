import { Box, Button, Container, FormControl, InputLabel, MenuItem, OutlinedInput, TextField, Typography, IconButton } from "@material-ui/core";
import clsx from 'clsx';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAlbumsByBand, getAllAlbums } from "../../actions/album";
import { addMusic, deleteMusics, getAllMusics, getMusicsByBand, setMusicDetails, editMusicName } from "../../actions/music";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header/index";
import { getTokenAdm, getTokenBand } from "../../utils/constants";
import { routes } from "../Router";
import { useStyles } from "./style";
import FormDialog from "../../components/FormDialog";
import { EditOutlined } from "@material-ui/icons";


const MusicsPage = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (getTokenBand()) {
      dispatch(getAlbumsByBand());
      dispatch(getMusicsByBand());
    } else if (getTokenAdm()) {
      dispatch(getAllAlbums());
      dispatch(getAllMusics());
    } else {
      dispatch(getAllMusics());
    }
  }, [dispatch]);

  const allAlbums = useSelector((state) => state.albums.allAlbums.albums);
  const albumsByBand = useSelector((state) => state.albums.albumsByBand.albums);
  const albums = allAlbums.length === 0 ? albumsByBand : allAlbums;

  const musicsByBand = useSelector((state) => state.musics.musicsByBand.musics);
  const numberOfRowsByBand = useSelector((state) => state.musics.musicsByBand.numberOfRows);

  const allMusics = useSelector((state) => state.musics.allMusics.musics);
  const numberOfRowsAllMusics = useSelector((state) => state.musics.allMusics.numberOfRows);

  let musics = allMusics.length === 0 ? musicsByBand : allMusics;
  let numberOfRows = numberOfRowsAllMusics === 0 ? numberOfRowsByBand : numberOfRowsAllMusics;

  const [open, setOpen] = React.useState(false);
  const [musicId, setMusicId] = React.useState();

  const [input, setInput] = React.useState({
    name: "",
    album: "",
  })

  const [inputEdit, setInputEdit] = React.useState({
    name: ""
  });

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'band', numeric: true, disablePadding: false, label: 'Banda' },
    { id: 'edit', numeric: true, disablePadding: true, label: 'Editar' }
  ];

  function createData(musicName, bandName, edit, id) {
    return { musicName, bandName, edit, id };
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
      music.name,
      (getTokenAdm() || getTokenBand()) &&
      <IconButton
        aria-label="editar"
        onClick={() => handleClickOpen(music.music_id, music.music_name)}>
        <EditOutlined />
      </IconButton>,
    music.music_id);
});

const handleChangeInput = event => {
  const { name, value } = event.target;
  setInput({ ...input, [name]: value })
}

const handleSubmit = event => {
  event.preventDefault();
  dispatch(addMusic(input));
}

const handleEditMusic = (event) => {
  event.preventDefault();

  dispatch(editMusicName(inputEdit.name, musicId))

  setOpen(false);
};

const handleClose = () => {
  setOpen(false);
}

const handleClickOpen = (musicId, musicName) => {
  setMusicId(musicId);
  setInputEdit({
    name: musicName
  })
  setOpen(true);
};

const handleChangeInputEdit = event => {
  const { name, value } = event.target;
  setInputEdit({
    ...inputEdit, [name]: value
  });
}

const formEditMusic =
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
  </form>;

return (
  <Container className={classes.root} maxWidth={false}>
    <Header />
    {
      getTokenAdm() || getTokenBand() ?
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
                <MenuItem key={option.album_id} value={option.album_name}>
                  {option.album_name}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Box className={classes.box}>
            <Button className={classes.submitButton} variant="contained" color="primary" type="submit">Adicionar</Button>
          </Box>
        </form>
        :
        false
    }
    <EnhancedTableHead
      rows={rows}
      headCells={headCells}
      title="Músicas"
      numberOfRows={numberOfRows}
      changePage={allMusics.length === 0 ? getMusicsByBand : getAllMusics}
      deleteFunction={deleteMusics}
      addPlaylist={true}
    />
    <FormDialog
      handleClose={handleClose}
      title="Editar Música"
      open={open}
      forms={formEditMusic}
      handleEdit={handleEditMusic}
    />
  </Container>
)
}


export default MusicsPage;