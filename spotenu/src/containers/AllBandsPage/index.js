import { Container, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { getTokenAdm } from "../../utils/constants";
import { useStyles } from "./style";
import { getAllBands, approveBands } from "../../actions/user";

const AllBandsPage = () => {

  let allBands = useSelector((state) => state.users.allBands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBands());
  }, [dispatch]);
  

  const classes = useStyles();
  let tokenAdm = getTokenAdm();

  const headCells = [
      { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
      { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
      { id: 'nickname', numeric: true, disablePadding: false, label: 'Apelido' },
      { id: 'approved', numeric: true, disablePadding: false, label: 'Aprovado' },
      { id: 'approve', numeric: true, disablePadding: false, label: 'Aprovar' }
    ];

  function showAllBands(name, email, nickname, is_approved, button) {
    return { name, email, nickname, is_approved, button };
  }

  const rows = allBands.map(data => {
    const is_approved = data.is_approved === 1 ? "Sim" : "Não";
    return showAllBands(
      data.name, 
      data.email, 
      data.nickname, 
      is_approved, 
      <Button variant="contained" color="primary" desabled={true} onClick={() => dispatch(approveBands(data.id))}>Aprovar</Button>);
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {allBands.length !== 0 ? <EnchancedTableHead rows={rows} headCells={headCells} /> : "Carregando..."}
    </Container>
  )

}

export default AllBandsPage;