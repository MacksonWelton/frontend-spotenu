import { Button, Container, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveBands, getAllBands } from "../../actions/user";
import EnchancedTableHead from "../../components/EnhancedTableHead";
import Header from "../../components/Header";
import { useStyles } from "./style";

const AllBandsPage = () => {

  let { bands, numberOfRows } = useSelector((state) => state.users.allBands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBands())
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

  const rows = bands.map(data => {
    const is_approved = data.is_approved === 1 ? "Sim" : "Não";
    return showAllBands(
      data.name,
      data.email,
      data.nickname,
      is_approved,
      is_approved === "Não" ?
        <Button variant="contained" color="primary" onClick={() => dispatch(approveBands(data.id))}>Aprovar</Button> :
        <Button variant="contained" color="primary" onClick={() => dispatch(approveBands(data.id, false))}>Reprovar</Button>
    );
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      {
        bands.length !== 0 ?
          <EnchancedTableHead
            rows={rows}
            headCells={headCells}
            numberOfRows={numberOfRows}
            changePage={getAllBands}
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

export default AllBandsPage;