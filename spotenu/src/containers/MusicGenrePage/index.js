import React, { useState } from "react";
import { Container } from "@material-ui/core";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";
import AddForm from "../../components/AddForm";
import { AddMusicGenre } from "../../actions/music";

const MusicGenrePage = () => {
  const classes = useStyles();

  const [input, setInput] = useState({
    genre: ""
  });

  const handleInput = event => {
    setInput({
      ...input, data: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    AddMusicGenre(input)
  }

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'button', numeric: true, disablePadding: false, label: 'Deletar' }
  ];

  function createData(name, button) {
    return { name, button };
  }
  
  const rows = [
    createData("José", "Deletar"),
    createData("Fernando", "Deletar")
  ];

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header/>
      <AddForm 
      handleSubmit={handleSubmit} 
      input={input} 
      handleInput={handleInput}
      name="genre"
      label="Gênero"
      />
      <EnhancedTableHead rows={rows} headCells={headCells} title="Gêneros"/>
    </Container>
  )
}

export default MusicGenrePage;