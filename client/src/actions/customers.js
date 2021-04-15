import * as api from "../api"

export const getCustomers = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCustomers()
        dispatch({ type: 'FETCH_CUSTOMER', payload: data });
    } catch (error) {
        console.log(error);
    }

}
export const custTransc = (transc) => async(dispatch) => {
    try {
        const { data } = await api.custtransaction(transc);
        // dispatch({ type: 'CREATE_TRANSC', payload: data })


    } catch (error) {
        console.log(error);
    }
}