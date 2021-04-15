import axios from 'axios'

var url = "https://damp-temple-55086.herokuapp.com/api/";

export const fetchCustomers = () => axios.get(url);
export const custtransaction = (transc) => axios.post(url + "transact", transc)
export const fetchtransactions = () => axios.get(url + "transact")