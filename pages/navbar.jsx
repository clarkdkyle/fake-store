import React, { useState, useEffect }from 'react';
import { fade, makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styles from '../styles/Home.module.css'
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    }));
    

export default function NavBar  () {
      const classes = useStyles();

  
    return (
    <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor:"#00704a"}}>
      <Toolbar >
       <Avatar alt="Dumb Logo" src="https://ih1.redbubble.net/image.419879232.6903/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" className={classes.large} />
        <Typography className={classes.title} variant="h2" noWrap>
          <strong>DUMB STARBUCKS COFFEE</strong>
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
