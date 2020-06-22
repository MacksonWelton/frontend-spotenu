import React from "react";
import { routes } from "../../containers/Router";
import { useHistory } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import Header from "../../components/Header";
import { ContainerWrapper, SignupButton, BoxButtons } from "./style";
import { useStyles } from "./style";
import clsx from 'clsx';

const HomePage = () => {
  let history = useHistory();
  const classes = useStyles();


  const goToSignupPremiumListenerPage = () => {
    history.push(routes.SignupPremiumListenerPage)
  }

  const goToSignupListenerPage = () => {
    history.push(routes.SingupListenerPage)
  }

  const goToSignupBandPage = () => {
    history.push(routes.SingupBandPage)
  }

  return (
    <ContainerWrapper maxWidth={false}>
      <Header />
      <div className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid className={clsx(classes.userListenerBackground, classes.gridItemUsers)} item>
            <div className={classes.contentGridItem}>
              <Typography variant="h4">
                Ouça sua música favorita gratuitamente.
              </Typography>
              <Typography variant="h6">
                São milhares de músicas para você curtir.
          </Typography>
              <BoxButtons>
                <SignupButton onClick={goToSignupListenerPage} variant="contained" color="secondary" type="submit">Cadastrar</SignupButton>
              </BoxButtons>
            </div>
          </Grid>
          <Grid className={clsx(classes.userPremiumBackground, classes.gridItemUsers)} item>
            <div className={classes.contentGridItem}>
              <Typography variant="h4">
                Ouça sua música favorita sem interrupções.
          </Typography>
              <Typography variant="h6">
                Assine agora mesmo nosso plano prêmio e tenha acesso a recursos ilimitados.
          </Typography>
              <BoxButtons>
                <SignupButton onClick={goToSignupPremiumListenerPage} variant="contained" color="secondary" type="submit">Assinar</SignupButton>
              </BoxButtons>
            </div>
          </Grid>
          <Grid className={clsx(classes.userBandBackground, classes.gridItemBand)} item>
            <div className={classes.contentGridItem}>
              <Typography variant="h4">
                Seus fãs e futuros fãs aguardam por você ou sua banda.
          </Typography>
              <Typography variant="h6">
                Alcance milhares de ouvintes em todo o mundo, faça seu cadastro ou da sua banda agora mesmo.
          </Typography>
              <BoxButtons>
                <SignupButton onClick={goToSignupBandPage} variant="contained" color="secondary" type="submit">Cadastrar</SignupButton>
              </BoxButtons>
            </div>
          </Grid>
        </Grid>
      </div>
    </ContainerWrapper>
  )

}

export default HomePage;