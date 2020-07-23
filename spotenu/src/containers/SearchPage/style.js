import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0
  },
  loading: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
  link: {
    cursor: 'pointer',
  }
}))