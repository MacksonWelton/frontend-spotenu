import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import VisitorHomepageItems from "../../components/VisitorHomepageItems";
import { useStyles } from "./style";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <VisitorHomepageItems />
    </Container>
  )

}

export default HomePage;