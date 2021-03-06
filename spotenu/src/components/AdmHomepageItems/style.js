import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  div: {
    width: "100%",
    padding: "60px 0px",
    [theme.breakpoints.up('md')]: {
      padding: "0px",
    }
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  gridItemUsers: {
    width: "100%",
    textAlign: 'center',
    display: "flex",
    margin: "0.5%",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      width: '49%',
    },
  },
  contentGridItem: {
    width: "100%",
    height: "200px",
    backgroundColor: "black",
    opacity: "0.8",
    padding: "20px",
  },
  loginButton: {
    width: "200px",
    marginBottom: "10px"
  },
  boxButtons: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0px",
    flexWrap: 'wrap'
  },
  signupButton: {
    width: "200px"
  }
}
));