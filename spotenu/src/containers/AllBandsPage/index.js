import { Button, Container, LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveBands, getAllBands } from "../../actions/user";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const AllBandsPage = () => {

  let allBands = useSelector((state) => state.users.allBands);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState({ loading: false })

  useEffect(() => {
    dispatch(getAllBands())
      .then(() => {
        setLoading({
          loading: false
        })
      })
  }, [dispatch]);


  const classes = useStyles();

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
      <Button variant="contained" color="primary" onClick={() => dispatch(approveBands(data.id))}>Aprovar</Button>);
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        loading.loading ?
          <div className={classes.loading}>
            <LinearProgress />
            <LinearProgress color="secondary" />
          </div>
          :
          <EnchancedTableHead rows={rows} headCells={headCells} />
      }
    </Container>
  )

}

export default AllBandsPage;