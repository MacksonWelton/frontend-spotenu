import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./style";
import { alert } from "../../actions/alert";
import { useDispatch } from "react-redux";

export default function Alerts(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  let { open, type, message } = props;

  const [openAlert, setOpenAlert] = React.useState(false);

  React.useEffect(() => {
    setOpenAlert(open)
  }, [open])

  const handleClose = () => {
    dispatch(alert("", "", false))
  }

  return (
    <div className={classes.root}>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={type}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

Alerts.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}