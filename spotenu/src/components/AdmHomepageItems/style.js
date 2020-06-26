import { makeStyles } from "@material-ui/core";
import * as userBandBackgroundImage from "../../assets/user-band.jpg";
import * as userListenerBackgroundImage from "../../assets/user-listener.jpg";
import * as userPremiumBackgroundImage from "../../assets/user-premium.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
  },
  div: {
    width: "100%",
    padding: 0,
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