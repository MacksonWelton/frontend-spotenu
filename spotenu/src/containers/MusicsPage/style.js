import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;

  @media(max-width: 800px) {
    width: 90%;
  }
`


export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
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
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    width: "90%",
    [theme.breakpoints.up('md')]: {
      width: "500px"
    }
  },
  buttonSubmit: {
    width: "200px"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px"
  }
}));