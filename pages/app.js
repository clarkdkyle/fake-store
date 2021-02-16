/* import Search from './search';
import items from '../items.json'
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


const filterItems = (items, query) => {
    if (!query) {
        return items;
    }
  
    return items.filter((item) => {
        const itemTitle= item.title.toLowerCase();
        return itemTitle.includes(query);
    });
  };


const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');  
    const filteredItems = filterItems(items, searchQuery);
    const [searchQuery, setSearchQuery] = useState(query || '');


    return (
        <div>
            <Search 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default App; */