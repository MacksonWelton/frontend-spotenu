import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from 'clsx';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/index";
import { routes } from "../Router";
import { BoxButtons, ContainerWrapper, Form, SignupButton, useStyles } from "./style";
import { premiumListenerSignup } from "../../actions/user";
import { useDispatch } from "react-redux";

const PremiumListenerSignupPage = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
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
    dispatch(premiumListenerSignup(input));
  }

  const goToLoginPage = () => {
    history.push(routes.LoginPage)
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
          <InputLabel htmlFor="nickname">Apelido</InputLabel>
          <OutlinedInput
            id="nickname"
            name="nickname"
            label="Apelido"
            type="text"
            onChange={handleChangeInput}
            value={input.nickname}
            required
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
          <SignupButton variant="contained" color="primary" type="submit">Cadastrar</SignupButton>
          <SignupButton variant="contained" color="default" onClick={goToLoginPage}>Fazer Login</SignupButton>
        </BoxButtons>
      </Form>
    </ContainerWrapper>
  )

}


export default PremiumListenerSignupPage;