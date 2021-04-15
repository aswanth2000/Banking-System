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
import {getTransactions} from '../actions/transaction';
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
      dispatch(getTransactions())
    })
  const transactions = useSelector(state => state.transactions);
  console.log(transactions)

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" style={{ textAlign:'center', marginTop:'1vh' }} component="h2">
            Transaction Details for Account Number {url}
        </Typography>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Transaction ID</StyledTableCell>
            <StyledTableCell align="left">From</StyledTableCell>
            <StyledTableCell align="left">To</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            (row.from===url ||row.to===url) &&<StyledTableRow key={row.AcNo}>
              <StyledTableCell component="th" scope="row" style={{fontWeight:'bold'}}>
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align="left">{row.from}</StyledTableCell>
              <StyledTableCell align="left">{row.to}</StyledTableCell>
              <StyledTableCell align="left" style={{fontWeight:'bold'}} >{"Rs."+row.Amount}</StyledTableCell>
              <StyledTableCell align="left" style={{color:'green' ,fontWeight:'bold'}}>{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
