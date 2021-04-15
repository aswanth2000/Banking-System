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
import Button from '@material-ui/core/Button';
import {getCustomers} from '../actions/customers';
import { useDispatch, useSelector } from 'react-redux';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop:'2vh',
  },
});

export default function Customers() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
      dispatch(getCustomers())
    })
  const customers = useSelector(state => state.customers);
  console.log(customers)

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Balance</StyledTableCell>
            <StyledTableCell align="center">Select</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <StyledTableRow key={row.AcNo}>
              <StyledTableCell component="th" style={{fontWeight:'bold'}} scope="row">
                {row.AcNo}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Name}</StyledTableCell>
              <StyledTableCell align="left">{row.Email}</StyledTableCell>
              <StyledTableCell align="left" style={{fontWeight:'bold'}} >{"Rs."+row.Balance}</StyledTableCell>
              <StyledTableCell align="center">
                   
                   <Button variant="contained" color="secondary" onClick={() =>{history.push("/customer/"+row.AcNo)}}>
                        Proceed <NavigateNextIcon></NavigateNextIcon>
                    </Button>
                
                    </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
