import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles, StylesProvider } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';



const useStyles = makeStyles((theme) => ({


search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor: '#ffffff',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const classes = useStyles();
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    }; 
    
    return (
    <form action="/" method="get"  autoComplete="off"
    onSubmit={onSubmit}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="dumb searching..."
            name="s"
        />
          </div>
    </form>
    );
};



export default SearchBar;