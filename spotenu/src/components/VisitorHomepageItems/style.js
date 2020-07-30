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
  },
  gridItemUsers: {
    width: "100%",
    textAlign: 'center',
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  gridItemBand: {
    width: "100%",
    textAlign: 'center',
    margin: "0px",
    display: "flex",
    alignItems: "center",
  },
  contentGridItem: {
    width: "100%",
    display: "inline-flex",
    flexDirection: "column",
    backgroundColor: "black",
    gap: "10px",
    opacity: "0.8",
    padding: "20px",
  },
  userListenerBackground: {
    backgroundImage: `url(${userListenerBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50vh",
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },
  userPremiumBackground: {
    backgroundImage: `url(${userPremiumBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50vh",
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },
  userBandBackground: {
    backgroundImage: `url(${userBandBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50vh",
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
    loginButton: {
      width: "200px",
    },
    boxButtons: {
      display: "flex",
      justifyContent: "center",
    },
    signupButton: {
      width: "200px"
    }
  }
}));