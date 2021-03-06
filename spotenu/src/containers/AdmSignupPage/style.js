import styled from 'styled-components';
import { Button, Box, Container } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;

  @media(max-width: 800px) {
    width: 90%;
  }
`

export const ContainerWrapper = withStyles({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
  }
})(Container)

export const BoxButtons = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0px",
    flexWrap: 'wrap'
  }

})(Box)

export const SignupButton = withStyles({
  root: {
    width: "200px",
    marginBottom: "10PX"
  }
})(Button)

export const LoginButton = withStyles({
  root: {
    width: "200px"
  }
})(Button)


export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));