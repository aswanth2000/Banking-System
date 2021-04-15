import * as api from "../api"

export const getTransactions = () => async(dispatch) => {
    try {
        const { data } = await api.fetchtransactions()
        dispatch({ type: 'FETCH_TRANS', payload: data });
    } catch (error) {
        console.log(error);
    }

}