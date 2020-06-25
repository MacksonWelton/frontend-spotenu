import { Box, Button, Container, FormControl, InputLabel, MenuItem, OutlinedInput, TextField } from "@material-ui/core";
import clsx from 'clsx';
import React, { useState } from "react";
import { addMusic } from "../../actions/music";
import Header from "../../components/Header/index";
import { useStyles } from "./style";


function MusicsPage(props) {

  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
    album: "",
    albums: [
      { label: "1", value: "Item 1" },
      { label: "2", value: "Item2" }
    ]
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    addMusic(input);
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="name">Nome</InputLabel>
          <OutlinedInput
            id="name"
            name="name"
            label="Nome"
            type="text"
            required
            onChange={handleChangeInput}
            value={input.name}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <TextField
            id="outlined-select-currency"
            select
            name="album"
            label="Álbum"
            value={input.album}
            onChange={handleChangeInput}
            helperText="Selecione um álbum "
            variant="outlined"
          >
            {input.albums.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Box className={classes.box}>
          <Button className={classes.submitButton} variant="contained" color="primary" type="submit">Adicionar</Button>
        </Box>
      </form>
    </Container>
  )

}


export default MusicsPage;