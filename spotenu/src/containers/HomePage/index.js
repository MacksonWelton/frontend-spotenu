import { Container } from "@material-ui/core";
import React from "react";
import AdmHomePageItems from "../../components/AdmHomePageItems";
import BandHomePageItems from "../../components/BandHomePageItems";
import FreeListenerHomepageItems from "../../components/FreeListenerPageItems";
import Header from "../../components/Header";
import PremiumListenerHomepageItems from "../../components/PremiumListenerPageItems";
import VisitorHomepageItems from "../../components/VisitorHomepageItems";
import { getTokenAdm, getTokenBand, getTokenFreeListener, getTokenPremiumListener } from "../../utils/constants";
import { useStyles } from "./style";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        getTokenAdm() ?
          <AdmHomePageItems /> :
          getTokenPremiumListener() ?
            <PremiumListenerHomepageItems /> :
            getTokenFreeListener() ?
              <FreeListenerHomepageItems /> :
              getTokenBand() ?
                <BandHomePageItems /> :
                <VisitorHomepageItems />
      }
    </Container>
  )

}

export default HomePage;