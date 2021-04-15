import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Customers from './components/Customers';
import Customer from './components/Customer';
import HomePage from "./components/Homepage"
import Navbar from './components/Navbar';
import {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {getCustomers} from './actions/customers';
import {getTransactions} from "./actions/transaction"
import Transaction from './components/Transaction';
import Transactions from './components/Trans';
import Transactions1 from './components/Trans1';
import {Typography} from '@material-ui/core'
function App() {
  var dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getCustomers())
    dispatch(getTransactions())

  })
  return ( 
    <Router>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>
      <Route exact path="/view">
        <Navbar></Navbar>
        <Typography variant="h3" style={{ textAlign:'center', marginTop:'1vh' }} component="h2">
            Customers
        </Typography>
        <Customers></Customers>
      </Route>
      <Route exact path="/customer/:id">
      <Navbar></Navbar>
      <Customer></Customer>
      <Transaction></Transaction>
      </Route>
      <Route exact path="/transactions">
        <Navbar></Navbar>
        <Transactions></Transactions>
      </Route>
      <Route exact path="/transaction/:id">
        <Navbar></Navbar>
        <Transactions1></Transactions1>
      </Route>

    </Router>
  );
}

export default App;
