import { Button, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllListeners, promoteListener, approveListener } from "../../actions/user";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const AllListenersPage = () => {

  let { listeners, numberOfRows } = useSelector((state) => state.users.allListeners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllListeners())
  }, [dispatch]);


  const classes = useStyles();

  const headCells = [
    { id: 'name', numeric: true, disablePadding: true, label: 'Nome' },
    { id: 'nickname', numeric: true, disablePadding: true, label: 'Apelido' },
    { id: 'email', numeric: true, disablePadding: true, label: 'Email' },
    { id: 'type', numeric: true, disablePadding: true, label: 'Tipo' },
    { id: 'promoteListener', numeric: true, disablePadding: true, label: 'Promover' },
    { id: 'approveListener', numeric: true, disablePadding: true, label: 'Aprovar/Banir' }
  ];

  function showAllListeners(name, nickname, email, type, buttonPromote, buttonApprove, id) {
    return { name, nickname, email, type, buttonPromote, buttonApprove, id };
  }

  const rows = listeners.map(data => {
    return showAllListeners(
      data.name,
      data.nickname,
      data.email,
      data.role === "PREMIUM LISTENER" ? "Ouvinte Premium" : "Ouvinte Gratuito",
      <Button variant="contained" color="primary" onClick={() => dispatch(promoteListener(data.id))}>Promover</Button>,
      !data.is_approved ?
      <Button variant="contained" color="primary" onClick={() => dispatch(approveListener(data.id))}>Aprovar</Button> :
      <Button variant="contained" color="primary" onClick={() => dispatch(approveListener(data.id, false))}>Banir</Button>
      ,
      data.id
    )
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <EnchancedTableHead
        rows={rows}
        title="Ouvintes"
        headCells={headCells}
        numberOfRows={numberOfRows}
        changePage={getAllListeners}
      />
    </Container>
  )
}

export default AllListenersPage;