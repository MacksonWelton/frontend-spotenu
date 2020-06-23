import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import Header from "../../components/Header";
import { useStyles } from "./style";
import AddForm from "../../components/AddForm";
import { AddMusicAlbum } from "../../actions/music";
import EnhancedTableHead from "../../components/EnhancedTableHead";

const AlbumsPage = () => {
  const classes = useStyles();

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'genre', numeric: true, disablePadding: false, label: 'Gênero' },
    { id: 'band', numeric: true, disablePadding: false, label: 'Banda' },
    { id: 'button', numeric: true, disablePadding: false, label: 'Deletar' }
  ];

  function createData(name, genre, band, button) {
    return { name, genre, band, button };
  }

  const rows = [
    createData("Forró 2020", "Forró", "Banda de Forró", <Button>Deletar</Button>)
  ];


  const [input, setInput] = useState({
    data: ""
  });

  const handleInput = event => {
    setInput({
      ...input, data: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    AddMusicAlbum(input)
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <AddForm
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
        name="album"
        label="Álbum"
      />
      <EnhancedTableHead rows={rows} headCells={headCells} title="Álbuns"/>
    </Container>
  )
}

export default AlbumsPage;