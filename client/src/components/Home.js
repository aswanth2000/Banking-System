import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import CredCard from './Credcard'
import Background from "../assets/bkg2.jpg";
// var Background="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-fresh-bank-card-machine-advertising-background-backgroundblue-backgroundmanmoneyhand-paintedatmsimplemachine-image_83842.jpg"
const useStyles = makeStyles((theme) => ({
    mn:{
        height:'100vh',
        width:'100vw',
        background: '#0575E6', /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #021B79, #0575E6)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #021B79, #0575E6)'/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
    }
   
  }));
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.mn}>
            <CredCard></CredCard>
        </div>
    )
}

export default Home
