import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMusicGenre, getAllGenres, deleteGenre } from "../../actions/genre";
import AddForm from "../../components/AddForm";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const MusicGenrePage = () => {
  const classes = useStyles();
  const { genres, numberOfRows } = useSelector((state) => state.genres.allGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);


  const [input, setInput] = useState({
    name: ""
  });

  const handleInput = event => {
    setInput({
      ...input, name: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(AddMusicGenre(input))
  }

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
  ];

  function createData(name, id) {
    return { name, id };
  }

  const rows = genres.map(data => {
    return createData(data.name, data.id)
  })

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <AddForm
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
        name="name"
        label="Gênero"
      />
      <EnhancedTableHead
        rows={rows}
        headCells={headCells}
        title="Gêneros"
        numberOfRows={numberOfRows}
        changePage={getAllGenres}
        addPlaylist={false}
        deleteFunction={deleteGenre}
      />
    </Container>
  )
}

export default MusicGenrePage;