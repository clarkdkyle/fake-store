import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    }; 
    
    return (
    <form action="/" method="get"  autoComplete="off"
    onSubmit={onSubmit}>
        
        
        
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="search our dumb drinks!"
            name="s"
        />
        <button type="submit"><SearchIcon /></button>
    </form>
    );
};



export default SearchBar;