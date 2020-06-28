import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import SearchIcon from '@material-ui/icons/Search';
import clsx from "clsx";
import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from "../../containers/Router";
import { useStyles } from "./style";
import { getToken, getTokenAdm } from '../../utils/constants';


const Header = () => {
  const page = getToken() || getTokenAdm();
  const history = useHistory();

  function handleClick() {
    history.push(routes.HomePage);
  }

  function goToLoginPage() {
    history.push(routes.LoginPage);
  }

  function goToAddMusicPage() {
    history.push(routes.AddMusicsPage);
  }

  function goToMusicGenrePage() {
    history.push(routes.MusicGenrePage);
  }

  function goToAddAlbumsPage() {
    history.push(routes.AddAlbumsPage);
  }

  function goToAllBandsPage() {
    history.push(routes.AllBandsPage)
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

  const logoff = () => {
    handleUserMenuClose()
    window.localStorage.clear();
    history.push(routes.homePage);
  }

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
      <div>
        <MenuItem onClick={logoff}>Sair</MenuItem>
      </div>
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
            title: "Adicionar Álbum",
            page: goToAddAlbumsPage
          }].map((text) => (
            <ListItem button key={text.title} onClick={text.page}>
              <ListItemIcon>
                <AddCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
      </List>
      <Divider />
      {getTokenAdm() &&
        <List>
          {[{
            title: "Aprovar Bandas",
            page: goToAllBandsPage
          },
          {
            title: "Adicionar Gênero",
            page: goToMusicGenrePage
          }].map((text, index) => (
            <ListItem button key={text.title} onClick={text.page}>
              <ListItemIcon>
                <ListAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
      }
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
      <div>
        <MenuItem onClick={logoff}>Sair</MenuItem>
      </div>
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
            )
          }
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
            {
              page ? (
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
              ) : (
                  <Button onClick={goToLoginPage} variant="contained" color="secondary">Entrar</Button>
                )
            }
          </div>
          <div className={classes.sectionMobile}>
            {
              page ? (
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileUserMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              ) : (
                  <Button onClick={goToLoginPage} variant="contained" color="secondary">Entrar</Button>
                )
            }
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