import React from "react";
import { Container } from "@material-ui/core";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const AllBandsPage = () => {
  const classes = useStyles();

  function createData(name, email, nickname, approved, button) {
    return { name, email, nickname, approved, button };
  }
  
  const rows = [
    createData("José", "jose@email.com","jose", "Sim", "Aprovar"),
    createData("Fernando", "jose@email.com","jose", "Sim", "Aprovar")
  ];

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header/>
      <EnchancedTableHead rows={rows}/>
    </Container>
  )
}

export default AllBandsPage;