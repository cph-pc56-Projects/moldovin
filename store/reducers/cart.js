import * as actionTypes from '../actions/actionTypes.js';
import { updateObject } from '../utility';

const initialState = {
    cartItems: [

    ]

}

const add = (state, cartItem) => {

    let found = state.cartItems.find(item => {
        return item.productId == cartItem.productId
    })
    if (found == undefined) {
        state.cartItems.push(cartItem)
        return state.cartItems
    }

    return setQuantity(state, cartItem)

}
// state, p.id, quantity

const setQuantity = (state, cartItem) => {
    console.log('cartItem', cartItem);
    return state.cartItems.map(item => {        
        if (item.productId === cartItem.productId) {
            return {
                ...item,
                quantity: cartItem.quantity,
                total: cartItem.total

            }
        }
        return item
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            const fullObject = {
                cartItems: add(state, action.cartItem)
            }
            return updateObject(state, fullObject);
        case actionTypes.UPDATE_ITEM_FROM_CART:
            const newData = {
                cartItems: setQuantity(state, action.cartItem)
            }            
            return updateObject(state, newData);
        case actionTypes.REMOVE_ITEM_FROM_CART:
            const newState = state.cartItems.filter(item => item.productId != action.productId)
            const newObject = {
                cartItems: newState
            }
            return updateObject(state, newObject)
        default:
            return state;
    }
}

export default reducer;