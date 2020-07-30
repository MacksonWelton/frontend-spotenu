import { Box, Button, Container, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import clsx from 'clsx';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUserName } from '../../actions/user';
import Header from "../../components/Header/index";
import LoginPageSignupButtons from "../../components/LoginPageSignupButtons";
import { useStyles } from "./style";

function EditUserPage() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editUserName(input.name));
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="nickname">Editar</InputLabel>
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
        <Box className={classes.boxButtons}>
          <Button className={classes.submitButton} variant="contained" color="primary" type="submit">Entrar</Button>
        </Box>
      </form>
      <LoginPageSignupButtons />
    </Container>
  )

}


export default EditUserPage;