import { Button, Container, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Box } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from 'clsx';
import React, { useState } from "react";
import { login } from '../../actions/user';
import Header from "../../components/Header/index";
import LoginPageSignupButtons from "../../components/LoginPageSignupButtons";
import { useStyles } from "./style";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    nickname: "",
    email: "",
    password: ""
  })

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(input, history));
  }

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="nickname">Apelido</InputLabel>
          <OutlinedInput
            id="name"
            name="nickname"
            label="Apelido"
            type="text"
            required
            onChange={handleChangeInput}
            value={input.niclname}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={handleChangeInput}
            value={input.email}
            required
            variant="outlined"
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Senha"
            onChange={handleChangeInput}
            type={values.showPassword ? 'text' : 'password'}
            required
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="password">Digite uma senha com no mínimo 6 dígitos.</FormHelperText>
        </FormControl>
        <Box className={classes.boxButtons}>
          <Button className={classes.loginButton} variant="contained" color="primary" type="submit">Entrar</Button>
        </Box>
      </form>
      <LoginPageSignupButtons />
    </Container>
  )

}


export default Login;