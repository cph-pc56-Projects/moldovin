import * as actionTypes from './actionTypes';

export const addItemToCart = (cartItem) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        cartItem
    }
}

export const removeItemFromCart = (productId) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        productId
    }
}