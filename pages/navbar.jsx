import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styles from '../styles/Home.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#00704a"}}>
        <Toolbar>
           <Typography variant="h6" className={classes.title}>
            <h1>Dumb Starbucks</h1>
           </Typography>
          <Button color="inherit"><a
              className="snipcart-checkout snipcart-summary"
              href="#"
              className={styles.cartButton}
            >
              <AddShoppingCartIcon />
              <p className="snipcart-total-price">$0.00</p>
            </a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


            