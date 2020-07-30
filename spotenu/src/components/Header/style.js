import { fade, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  grow: {
    grow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  menuLogoSearch: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    width: '200px',
    cursor: 'pointer'
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    height: "35px",
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: '30%',
    },
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  inputRoot: {
    color: 'inherit',
    width: '90%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

