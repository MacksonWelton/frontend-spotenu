import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { searchMusics } from "../../actions/music";
import { getTokenAdm, getTokenPremiumListener } from "../../utils/constants";
import { useStyles, useToolbarStyles } from "./style";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function MusicTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells, numSelected, rowCount, onSelectAllClick, checkBox } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {checkBox && <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

MusicTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const MusicsSearchResultsTableHeadToolbar = (props) => {
  const classes = useToolbarStyles();
  const dispatch = useDispatch();

  const { numSelected, title, selected, addPlaylist, handleClickListItem, deleteOption } = props;

  const deleteItem = () => {
    dispatch(props.deleteFunction(selected));
  }

  const openPlaylists = () => {
    handleClickListItem(selected)
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {title}
          </Typography>
        )}

      {numSelected > 0 ?
        (getTokenPremiumListener() || getTokenAdm()) && addPlaylist && deleteOption ?
          (
            <>
              <Tooltip title="Adicionar a playlist">
                <IconButton aria-label="Adicionar a playlist" onClick={openPlaylists}>
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={deleteItem}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </>
          )
          :
          (getTokenPremiumListener() || getTokenAdm()) && addPlaylist ?
            (
              <>
                <Tooltip title="Adicionar a playlist">
                  <IconButton aria-label="Adicionar a playlist" onClick={openPlaylists}>
                    <PlaylistAddIcon />
                  </IconButton>
                </Tooltip>
              </>
            )
            :
            (
              <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={deleteItem}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )
        :
        (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
};

MusicsSearchResultsTableHeadToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const MusicsSearchResults= (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const { rows, headCells, title, numberOfRows, searchedMusic, deleteFunction, addPlaylist, handleClickListItem, checkBox } = props;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(searchMusics(searchedMusic, newPage));
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MusicsSearchResultsTableHeadToolbar
          numSelected={selected.length}
          title={title}
          addPlaylist={addPlaylist}
          selected={selected}
          deleteFunction={deleteFunction}
          handleClickListItem={handleClickListItem}
        />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <MusicTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(0, rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {checkBox &&
                          <Checkbox
                            onClick={(event) => handleClick(event, row.id)}
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />}
                      </TableCell>
                      {
                        headCells.map((item, i) => (
                          <TableCell key={i} align="center">{row[Object.keys(row)[i]]}</TableCell>
                        ))
                      }
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={numberOfRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default MusicsSearchResults;