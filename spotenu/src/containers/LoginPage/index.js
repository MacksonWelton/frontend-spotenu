import React, { useState } from "react";
import { IconButton, InputAdornment, InputLabel, FormControl, OutlinedInput, FormHelperText } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, LoginButtom, BoxButtons, useStyles, ContainerWrapper } from "./style";
import clsx from 'clsx';
import { login } from '../../actions/user';
import Header from "../../components/Header/index";
import LoginPageSignupButtons from "../../components/LoginPageSignupButtons";


function Login(props) {

  const classes = useStyles();

  const [input, setInput] = useState({
    name: "",
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
    login(input);
  }

  return (
    <ContainerWrapper maxWidth={false}>
      <Header />
      <Form onSubmit={handleSubmit}>
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
        <BoxButtons>
          <LoginButtom variant="contained" color="primary" type="submit">Entrar</LoginButtom>
        </BoxButtons>
      </Form>
      <LoginPageSignupButtons/>
    </ContainerWrapper>
  )

}


export default Login;