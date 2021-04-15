import React  ,{ useEffect }from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {custTransc} from '../actions/customers';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      marginLeft:'43vw',
      marginTop:'5vh'

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const Transaction = () => {

  const customers = useSelector(state => state.customers);
  const dispatch = useDispatch();
    const url= window.location.pathname.split("/")[2];
    
    const [er,seter]=React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    function handleSubmit(event){
        event.preventDefault();
        seter(0)
        if(transc.from===transc.to)
        {
            seter("You cannout transfer to your own Account")
            setOpen(true)
        }else{
            var i=0;
            var bal;
            var len=customers.length;
            while(i<len)
            {
                if(customers[i].AcNo===url)bal=customers[i].Balance;
                i++;
                

            }
           if(Number(transc.Amount)>bal || Number(transc.Amount)<=0){
            seter("Invalid Amount!! Please Check your Balance or your Input Amount!!")
            setOpen(true)
            
           }
           else{
            dispatch(custTransc(transc));
            seter("Transaction Successfull!!")
            setOpen(true)
            settransc({from:'',to:'',Amount:''})
           }
     }
        
        console.log(transc)
    }
    
    const classes = useStyles();
  const [transc, settransc] = React.useState({from:url,to:'',Amount:''});
  
  const handleChange = (event) => {
    settransc({...transc,to:event.target.value});
  };
    return (
        <div>
            <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <FormControl className={classes.formControl}>
                <Typography variant="h3" component="h3" style={{marginBottom:'4vw'}}>
                    Transaction
                </Typography>
                 
                    <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={transc.to}
                    
                    onChange={handleChange}
                    >
                    <MenuItem value={"A001"}>A001</MenuItem>
                    <MenuItem value={"A002"}>A002</MenuItem>
                    <MenuItem value={"A003"}>A003</MenuItem>
                    <MenuItem value={"A004"}>A004</MenuItem>
                    <MenuItem value={"A005"}>A005</MenuItem>
                    <MenuItem value={"A006"}>A006</MenuItem>
                    <MenuItem value={"A007"}>A007</MenuItem>
                    <MenuItem value={"A008"}>A008</MenuItem>
                    <MenuItem value={"A009"}>A009</MenuItem>
                    <MenuItem value={"A010"}>A010</MenuItem>
                    </Select>
                    <FormHelperText>Click Here to Select Account</FormHelperText>
                    <TextField  required id="standard-required" label="Amount" value={transc.Amount} onChange={(e) => settransc({ ...transc, Amount: e.target.value})}  />
                    <Button style={{marginTop: 10,}} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </FormControl>

            </form>
            {open&& <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {er}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>}
        </div>
    )
}

export default Transaction
