import React ,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {getCustomers} from '../actions/customers';
import { useDispatch, useSelector } from 'react-redux';
import {Typography} from '@material-ui/core'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop:'2vh',
  },
});

export default function Customers() {
    const dispatch = useDispatch();
    const history = useHistory();
    const url= window.location.pathname.split("/")[2];
    console.log(url)
    useEffect(()=>{
      dispatch(getCustomers())
    })
  const customers = useSelector(state => state.customers);
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" style={{ textAlign:'center', marginTop:'1vh' }} component="h2">
            Account Details for Account Number {url}
        </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Attribute</StyledTableCell>
            <StyledTableCell align="left">Details</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        <StyledTableRow key={1}>
            <StyledTableCell align="left">Account Number</StyledTableCell>
            <StyledTableCell align="left">{customers.map((row) => row.AcNo==url?row.AcNo:'')}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key={2}>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">{customers.map((row) => row.AcNo==url?row.Name:'')}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key={3}>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">{customers.map((row) => row.AcNo==url?row.Email:'')}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key={4}>
            <StyledTableCell align="left">Current Balance</StyledTableCell>
            <StyledTableCell align="left">{customers.map((row) => row.AcNo==url?"Rs."+row.Balance:'')}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key={5}>
            <StyledTableCell align="left">View Transaction History</StyledTableCell>
            <StyledTableCell align="left">
                <Button variant="contained" color="secondary" onClick={() =>{customers.map((row) => row.AcNo==url?history.push("/transaction/"+row.AcNo):'')}}>
                    Transaction History
                </Button>
            </StyledTableCell>
        </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
