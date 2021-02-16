import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search Dumb Drinks
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search for a dumb drink"
                name="s"
            />
            <button type="submit"><SearchIcon></SearchIcon></button>
        </form>
    );
};

export default SearchBar;