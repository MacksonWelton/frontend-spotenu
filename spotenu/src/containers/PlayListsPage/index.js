import {
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  OutlinedInput,
  Switch, Typography
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPlaylist, editPlaylistName, getAllPlaylists, getMusicsByPlaylist, getPlaylistsByUser, makePlaylistCollaborative } from "../../actions/playlist";
import { getIdUser } from "../../actions/user";
import AddForm from "../../components/AddForm";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import FormDialog from "../../components/FormDialog";
import Header from "../../components/Header";
import { getTokenPremiumListener } from "../../utils/constants";
import { routes } from "../Router";
import { useStyles } from "./style";

const PlaylistsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser())
    } else {
      dispatch(getAllPlaylists());
    }
    dispatch(getIdUser())
  }, [dispatch]);

  const allPlaylists = useSelector((state) => state.playlists.allPlaylists.playlists);
  const numberOfRowsAllPlaylists = useSelector((state) => state.playlists.allPlaylists.numberOfRows);

  const playlistsByUser = useSelector((state) => state.playlists.playlistsByUser.playlists);
  const numberOfRowsByUser = useSelector((state) => state.playlists.playlistsByUser.numberOfRows);

  const idUser = useSelector((state) => state.users.idUser)

  const playlists = allPlaylists.length === 0 ? playlistsByUser : allPlaylists;
  const numberOfRows = numberOfRowsAllPlaylists === 0 ? numberOfRowsByUser : numberOfRowsAllPlaylists;

  const [open, setOpen] = React.useState(false);

  const [playlistId, setPlaylistId] = React.useState();
  const [ownerPlaylist, setOwnerPlaylist] = React.useState();

  const [input, setInput] = React.useState({
    name: ""
  });

  const [inputEdit, setInputEdit] = React.useState({
    name: ""
  });

  const [state, setState] = React.useState({
    isPrivate: true,
  });

  const [changeSelect, setChangeSelect] = React.useState(false);

  const handleChange = (event) => {
    setChangeSelect(true);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleInput = event => {
    setInput({
      ...input, name: event.target.value
    })
  }

  const handleEditPlaylist = (event) => {
    event.preventDefault();

    if (inputEdit.name.trim()) {
      dispatch(editPlaylistName(playlistId, inputEdit.name));
    }

    if (changeSelect) {
      dispatch(makePlaylistCollaborative(playlistId, ownerPlaylist, !state.isPrivate));
    }

    setOpen(false);
  };

  const handleChangeInputEdit = event => {
    const { name, value } = event.target;
    setInputEdit({
      ...inputEdit, [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createPlaylist(input))
  }

  const handleClickOpen = (playlistId, ownerPlaylist, isPrivate) => {
    setState({ isPrivate: !Number(isPrivate) });
    setPlaylistId(playlistId);
    setOwnerPlaylist(ownerPlaylist);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'edit', numeric: true, disablePadding: true, label: 'Editar' },
  ];

  function createData(name, id) {
    return { name, id };
  }

  const handleChangePageToPlaylistMusics = (playlist_id) => {
    dispatch(getMusicsByPlaylist(playlist_id))
    history.push(routes.PlaylistMusicsPage)
  }

  const rows = playlists.map((playlist) => {

    const editButton = playlist.user_id === idUser;

    return createData(
      <Typography
        className={classes.link}
        key={playlist.playlist_id}
        onClick={() => handleChangePageToPlaylistMusics(playlist.playlist_id)}
      >
        {playlist.playlist_name}
      </Typography>
      ,
      editButton &&
      <IconButton
        aria-label="editar"
        onClick={() => handleClickOpen(playlist.playlist_id, playlist.user_id, playlist.is_private)}>
        <EditOutlined />
      </IconButton>,
      playlist.playlist_id);
  });

  const IOSSwitch = (props) => (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.rootSwitch,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />);

  const formEditPlaylist =
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
        <FormControlLabel
          control={<IOSSwitch checked={state.isPrivate} onChange={handleChange} name="isPrivate" />}
          label="Playlist colaborativa"
        />
      </FormControl>
    </form>;

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
      <EnhancedTableHead
        rows={rows}
        headCells={headCells}
        title="Minhas Playlists"
        numberOfRows={numberOfRows}
        changePage={getAllPlaylists}
        addPlaylist={false}
      />
      <FormDialog
        handleClose={handleClose}
        title="Editar Playlist"
        open={open}
        forms={formEditPlaylist}
        handleEdit={handleEditPlaylist}
      />
    </Container>
  )
}

export default PlaylistsPage;