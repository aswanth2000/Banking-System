import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HomePage from "./Home"
import Navbar from "./Navbar"
const useStyles = makeStyles((theme) => ({
    mn:{
        height:'100vh',
        width:'100vw',
        overflowX:'hidden',
        overflowY:'hidden'
    }
   
  }));
export default function Homepage(){
    const classes = useStyles();
    return (
    
        <div className={classes.mn}>
        
            <HomePage></HomePage>
        </div>
    )
}
