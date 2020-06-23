import React from "react";
import { Container } from "@material-ui/core";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const AllBandsPage = () => {
  const classes = useStyles();

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Gênero' },
    { id: 'nickname', numeric: true, disablePadding: false, label: 'Banda' },
    { id: 'approved', numeric: true, disablePadding: false, label: 'Aprovado' },
    { id: 'approve', numeric: true, disablePadding: false, label: 'Aprovar' }
  ];

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
      <EnchancedTableHead rows={rows} headCells={headCells}/>
    </Container>
  )
}

export default AllBandsPage;