import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import VisitorHomepageItems from "../../components/VisitorHomepageItems";
import AdmHomepageItems from "../../components/AdmHomepageItems";
import { useStyles } from "./style";
import { getTokenAdm, getTokenBand } from "../../utils/constants";
import BandHomePageItems from "../../components/BandHomePageItems";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        getTokenAdm() ? <AdmHomepageItems /> : getTokenBand() ? <BandHomePageItems/> : <VisitorHomepageItems />
      }
    </Container>
  )

}

export default HomePage;