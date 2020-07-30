import { Button, Container } from "@material-ui/core";
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
    { id: 'nickname', numeric: true, disablePadding: false, label: 'Apelido' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'approve', numeric: true, disablePadding: false, label: 'Aprovar/Banir' }
  ];

  function showAllBands(name, nickname, email, button, id) {
    return { name, nickname, email, button, id };
  }

  const rows = bands.map(data => {
    return showAllBands(
      data.name,
      data.nickname,
      data.email,
      !data.is_approved ?
        <Button variant="contained" color="primary" onClick={() => dispatch(approveBands(data.id))}>Aprovar</Button> :
        <Button variant="contained" color="primary" onClick={() => dispatch(approveBands(data.id, false))}>Reprovar</Button>,
        data.id
    );
  });

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <EnchancedTableHead
        rows={rows}
        title="Bandas"
        headCells={headCells}
        numberOfRows={numberOfRows}
        changePage={getAllBands}
      />
    </Container>
  )

}

export default AllBandsPage;