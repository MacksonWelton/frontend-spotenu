import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import PropTypes from "prop-types";
import { getTokenPremiumListener, getTokenAdm } from "../../utils/constants";
import { getPlaylistsByUser, getAllPlaylists, addMusicToPlaylist } from "../../actions/playlist";
import TablePagination from "@material-ui/core/TablePagination";


function ConfirmationDialogRaw(props) {
  const { selectedMusics, onClose, value: valueProp, open, ...other } = props;


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser())
    } else if (getTokenAdm()) {
      dispatch(getAllPlaylists());
    }
  }, [dispatch]);

  const allPlaylists = useSelector((state) => state.playlists.allPlaylists.playlists);
  const numberOfRowsAllPlaylists = useSelector((state) => state.playlists.allPlaylists.numberOfRows);

  const playlistsByUser = useSelector((state) => state.playlists.playlistsByUser.playlists);
  const numberOfRowsByUser = useSelector((state) => state.playlists.playlistsByUser.numberOfRows);

  const playlists = allPlaylists.length === 0 ? playlistsByUser : allPlaylists;
  const numberOfRows = numberOfRowsAllPlaylists === 0 ? numberOfRowsByUser : numberOfRowsAllPlaylists;

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    dispatch(addMusicToPlaylist(value, selectedMusics));
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    if (getTokenPremiumListener()) {
      dispatch(getPlaylistsByUser(newPage))
    } else {
      dispatch(getAllPlaylists(newPage));
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Escolher Playlist</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {playlists.map((option) => (
            <FormControlLabel value={option.playlist_id} key={option.playlist_id} control={<Radio />} label={option.playlist_name} />
          ))}
        </RadioGroup>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={numberOfRows ? numberOfRows : 0}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};


export default ConfirmationDialogRaw;