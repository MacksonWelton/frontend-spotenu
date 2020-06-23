import React from "react";
import {TextField, Button} from '@material-ui/core';
import {useStyles} from "./style";

const AddForm = (props) => {

  const classes = useStyles();

  const {handleSubmit, handleInput, input, name, label} = props;

  return (
  <form onSubmit={handleSubmit} className={classes.root}>
    <TextField id="outlined-basic" name={name} value={input.data} onChange={handleInput} label={label} variant="outlined" />
    <Button className={classes.button} color="primary" type="submit" variant="contained">Adicionar</Button>
  </form>
  )
}

export default AddForm;