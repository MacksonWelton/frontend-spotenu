import React from "react";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import {routes} from "../../containers/Router";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import clsx from "clsx";

const VisitorHomepageItems = () => {

  const classes = useStyles();
  const history = useHistory();

  const goToPremiumListenerSignupPage = () => {
    history.push(routes.PremiumListenerSignupPage)
  }

  const goToListenerSignupPage = () => {
    history.push(routes.ListenerSignupPage)
  }

  const goToBandSignupPage = () => {
    history.push(routes.BandSignupPage)
  }

  return (
    <div className={classes.div}>
    <Grid container className={classes.gridContainer}>
      <Grid className={clsx(classes.userListenerBackground, classes.gridItemUsers)} item>
        <div className={classes.contentGridItem}>
          <Typography color="textSecondary" variant="h4">
            Ouça sua música favorita gratuitamente.
          </Typography>
          <Typography color="textSecondary" variant="h6">
            São milhares de músicas para você curtir.
      </Typography>
          <Box className={classes.boxButtons}>
            <Button className={classes.signupButton} onClick={goToListenerSignupPage} variant="contained" color="default" type="submit">Cadastrar</Button>
          </Box>
        </div>
      </Grid>
      <Grid className={clsx(classes.userPremiumBackground, classes.gridItemUsers)} item>
        <div className={classes.contentGridItem}>
          <Typography color="textSecondary" variant="h4">
            Ouça sua música favorita sem interrupções.
      </Typography>
          <Typography color="textSecondary" variant="h6">
            Assine agora mesmo nosso plano prêmio e tenha acesso a recursos ilimitados.
      </Typography>
          <Box className={classes.boxButtons}>
            <Button className={classes.signupButton} onClick={goToPremiumListenerSignupPage} variant="contained" color="primary" type="submit">Assinar</Button>
          </Box>
        </div>
      </Grid>
      <Grid className={clsx(classes.userBandBackground, classes.gridItemBand)} item>
        <div className={classes.contentGridItem}>
          <Typography color="textSecondary" variant="h4">
            Seus fãs e futuros fãs aguardam por você ou sua banda.
      </Typography>
          <Typography color="textSecondary" variant="h6">
            Alcance milhares de ouvintes em todo o mundo, faça seu cadastro ou da sua banda agora mesmo.
      </Typography>
          <Box className={classes.boxButtons}>
            <Button className={classes.signupButton} onClick={goToBandSignupPage} variant="contained" color="default" type="submit">Cadastrar</Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  </div>
  )

}

export default VisitorHomepageItems;