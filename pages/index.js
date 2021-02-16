import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import items from '../items.json'
import NavBar from './navbar.jsx'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BrowserRouter as Router } from "react-router-dom";
import Search from './search';

const filterItems = (items, query) => {
  if (!query) {
      return items;
  }

  return items.filter((item) => {
      const itemTitle= item.title.toLowerCase();
      return itemTitle.includes(query);
  });
};


export default function Home() {

   const  [search, setSearch] = useState("")
  useEffect(() => { setSearch(window.location)});
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredItems = filterItems(items, searchQuery);
 


    return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      
      <header>
        <NavBar>
          <h1 className={styles.title}>Dumb Starbucks</h1>
         
        </NavBar>
      </header>

      <main className={styles.main}>
      <Search 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
        <div className={styles.grid}>
          {filteredItems.map((item) => {
            return (
              <div key={item.id} className={styles.card}>
                <img className={styles.image} src={item.image} alt={`Preview of ${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <br />
                <p>
                <span>${item.price}</span> 
                 <button className={styles.cartButton}
                    className="snipcart-add-item"
                    data-item-id={item.id}
                    data-item-image={item.image}
                    data-item-name={item.title}
                    data-item-url="/"
                    data-item-price={item.price}
                  >
                    <AddShoppingCartIcon />
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright 2021</p>
      </footer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="YjllODc5YWEtNzI4ZS00NjkwLWE5MDEtMzRkMzRiODU5NWU1NjM3NDg3OTU2MzgxOTExNTI0"
      />
    </div>
  );
}

