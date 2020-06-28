import { Container, LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AddMusicGenre, getAllGenres } from "../../actions/music";
import AddForm from "../../components/AddForm";
import EnhancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";

const MusicGenrePage = () => {
  const classes = useStyles();
  const allGenres = useSelector((state) => state.musics.allGenres);
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

  function createData(name) {
    return { name };
  }

  const rows = allGenres.map(data => {
    return createData(data.name)
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
      {
        allGenres.length !== 0 ? <EnhancedTableHead rows={rows} headCells={headCells} title="Gêneros" />
          :
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
      }
    </Container>
  )
}

export default MusicGenrePage;