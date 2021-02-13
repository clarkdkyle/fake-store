import Head from 'next/head'
import styles from '../styles/Home.module.css'
import items from '../items.json'

export default function Home() {
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

      <main className={styles.main}>
        <h1 className={styles.title}>
         Fake Store
        </h1>

        <p className={styles.description}>
  <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
    <strong>Cart:</strong> <span className="snipcart-total-price">$0.00</span>
  </a>
</p>

        <div className={styles.grid} >
          {items.map((item) => {
            return (
              <div key={item.id} className={styles.card}>
                 <img src={item.image} alt={`Preview of ${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={item.id}
                    data-item-image={item.image}
                    data-item-name={item.title}
                    data-item-url="/"
                    data-item-price={item.price}
                  >
                    Add to Cart
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
      <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
<div hidden id="snipcart" data-api-key="YjllODc5YWEtNzI4ZS00NjkwLWE5MDEtMzRkMzRiODU5NWU1NjM3NDg3OTU2MzgxOTExNTI0" />
    </div>
  )
}

