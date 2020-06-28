import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
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
    margin: "20px auto",
    width: "90%",
    [theme.breakpoints.up('md')]: {
      width: "500px"
    }
  },
  buttonSubmit: {
    width: "200px"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  }
}));