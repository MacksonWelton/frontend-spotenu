import { Button, Container, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllListeners, promoteListener } from "../../actions/user";
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
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'nickname', numeric: true, disablePadding: false, label: 'Apelido' },
    { id: 'type', numeric: true, disablePadding: false, label: 'Tipo' },
    { id: 'promoteListener', numeric: true, disablePadding: false, label: 'Promover' }
  ];

  function showAllListeners(name, email, nickname, type, button, id) {
    return { name, email, nickname, type, button, id };
  }

  const rows = listeners.map(data => {
    return showAllListeners(
      data.name,
      data.email,
      data.nickname,
      data.role === "PREMIUM LISTENER" ? "Ouvinte Premium" : "Ouvinte Gratuito",
      <Button variant="contained" color="primary" onClick={() => dispatch(promoteListener(data.id))}>Promover</Button>,
      data.id
    )
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        listeners.length !== 0 ?
          <EnchancedTableHead
            rows={rows}
            headCells={headCells}
            numberOfRows={numberOfRows}
            changePage={getAllListeners}
          />
          :
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
      }
    </Container>
  )
}

export default AllListenersPage;