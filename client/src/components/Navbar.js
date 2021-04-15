import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX:'hidden',
    overflowY:'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick = {() =>{history.push("/")}} className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountBalanceIcon />
          </IconButton>
          <Typography variant="h6" style={{fontWeight:'bolder'}} className={classes.title} >
            The Sparks Bank Foundation
          </Typography>
          <Button color="inherit" style={{fontWeight:'bolder'}} onClick = {() =>{history.push("/view")}}>Customers</Button>
          <Button color="inherit" style={{fontWeight:'bolder'}} onClick = {() =>{history.push("/transactions")}}>Transactions</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
