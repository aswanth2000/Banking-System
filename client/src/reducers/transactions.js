export default (transactions = [], action) => {
    switch (action.type) {
        case 'FETCH_TRANS':
            return action.payload;
        default:
            return transactions;
    }
}