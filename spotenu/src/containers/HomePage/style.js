import { Container, withStyles, Button, Box, makeStyles } from "@material-ui/core";
import * as userListenerBackgroundImage from "../../assets/user-listener.jpg";
import * as userPremiumBackgroundImage from "../../assets/user-premium.jpg";
import * as userBandBackgroundImage from "../../assets/user-band.jpg";

export const ContainerWrapper = withStyles({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
  }
})(Container)

export const LoginButtom = withStyles({
  root: {
    width: "200px",
    marginBottom: "10px"
  }
})(Button)

export const SignupButton = withStyles({
  root: {
    width: "200px",
  }
})(Button)

export const BoxButtons = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0px",
    flexWrap: 'wrap'
  }

})(Box)

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  }
  ,
  gridItemUsers: {
    width: "100%",
    textAlign: 'center',
    color: theme.palette.text.white,
    margin: "0px",
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  gridItemBand: {
    width: "100%",
    textAlign: 'center',
    color: theme.palette.text.white,
    margin: "0px",
  },
  contentGridItem: {
    width: "100%",
    marginTop: "70px"
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
  }
}));