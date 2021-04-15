export default (customers = [], action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMER':
            return action.payload;

        default:
            return customers;
    }
}