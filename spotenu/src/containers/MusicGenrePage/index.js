import React from "react";
import { Container } from "@material-ui/core";
import TableMusicGenre from "../../components/TableMusicGenre";
import Header from "../../components/Header";
import { useStyles } from "./style";
import AddMusicGenreForm from "../../components/AddMusicGenreForm";

const MusicGenrePage = () => {
  const classes = useStyles();

  function createData(name, email, nickname, approved, button) {
    return { name, email, nickname, approved, button };
  }
  
  const rows = [
    createData("José", "jose@email.com","jose", "Sim", "Deletar"),
    createData("Fernando", "jose@email.com","jose", "Sim", "Deletar")
  ];

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header/>
      <AddMusicGenreForm/>
      <TableMusicGenre rows={rows}/>
    </Container>
  )
}

export default MusicGenrePage;