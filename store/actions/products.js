import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        wines: products
    }
}

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}

export const initProducts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(setProducts(response.data))
            })
            .catch(err => {
                dispatch(fetchProductsFailed())
            })
    }
}