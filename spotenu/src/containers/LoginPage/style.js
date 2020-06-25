import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "50px auto",
    [theme.breakpoints.up('md')]: {
      width: '500px',
    }
  },
  boxButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px",
  },
  loginButton: {
    width: "200px"
  }
}));