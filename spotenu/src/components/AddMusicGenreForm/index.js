import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';
import {useStyles} from "./style";
import {AddMusicGenre} from "../../actions/music";

const AddMusicGenreForm = () => {

  const classes = useStyles();

  const [input, setInput] = useState({
    genre: ""
  });

  const handleInput = event => {
    setInput({
      ...input, genre: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    AddMusicGenre(input)
  }

  return (
  <form onSubmit={handleSubmit} className={classes.root}>
    <TextField id="outlined-basic" name="genre" value={input.genre} onChange={handleInput} label="Gênero" variant="outlined" />
    <Button className={classes.button} color="primary" type="submit" variant="contained">Adicionar</Button>
  </form>
  )
}

export default AddMusicGenreForm;