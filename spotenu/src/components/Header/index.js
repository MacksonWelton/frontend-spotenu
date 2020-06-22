import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { routes } from "../../containers/Router";

import { useStyles } from "./style";

const Header = () => {
  const page = useSelector((state) => state.router.location.pathname).includes("/");
  let history = useHistory();

  function handleClick() {
    history.push(routes.homePage);
  }

  function goToLoginPage() {
    history.push(routes.LoginPage);
  }

  function goToAddMusicPage() {
    history.push();
  }

  function goToAddMusicGenre() {
    history.push(routes.AddMusicGenrePage);
  }

  function goToAddMusicAlbum() {
    history.push(3);
  }

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [resourceMenu, setResourceMenu] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isUserMenuOpen = Boolean(anchorEl);

  const isMobileUserMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setResourceMenu({ ...resourceMenu, [anchor]: open });
  };


  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileUserMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderUserMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isUserMenuOpen}
      onClose={handleUserMenuClose}
    >
      {page === true ?
        (
          <div>
            <MenuItem onClick={handleUserMenuClose}>Ver Perfil</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Editar Perfil</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Sair</MenuItem>
          </div>
        )
        :
        (
          <div>
            <MenuItem onClick={goToLoginPage}>Entrar</MenuItem>
          </div>
        )
      }
    </Menu>
  );

  const renderResourceMenu = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            title: "Adicionar Música",
            page: goToAddMusicPage
          },
          {
            title: "Adicionar Gênero",
            page: goToAddMusicGenre
          },
          {
            title: "Adicionar Álbum",
            page: goToAddMusicAlbum
          }].map((text, index) => (
            <ListItem button key={text.title} onClick={text.page}>
              <ListItemIcon>
                <AddCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileUserMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {page === true ?
        (
          <div>
            <MenuItem onClick={handleUserMenuClose}>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Ver Perfil</p>
            </MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Editar Perfil</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Sair</MenuItem>
          </div>
        )
        :
        (
          <div>
            <MenuItem onClick={goToLoginPage}>
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <InputOutlinedIcon />
              </IconButton>
              <p>Entrar</p>
            </MenuItem>
          </div>
        )
      }
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {
            page && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          <Typography onClick={handleClick} className={classes.title} variant="h6" noWrap>
            Spotenu
            <MusicNoteOutlinedIcon />
          </Typography>

          {
            page && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Pesquisar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleUserMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileUserMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderUserMenu}
      <Drawer
        anchor={"left"}
        open={resourceMenu["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {renderResourceMenu("left")}
      </Drawer>
    </div>
  );
}

export default Header;