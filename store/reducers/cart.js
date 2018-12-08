import * as actionTypes from '../actions/actionTypes.js';
import { updateObject } from '../utility';

const initialState = {
    cartItems: [

    ]

}

const addNewItem = (state, cartItem) => {
    let add = false;
    let newState;
    if (state.cartItems.length == 0) {
      let newState = []
      newState.push(cartItem)
      return newState
    }
    newState = state.cartItems.map(item => {
      if (item.productId == cartItem.productId) {
        return {
          ...item,
          quantity: cartItem.quantity,
          total: cartItem.total
  
        }
      } else {
        add = true
        return item
      }
    })
  
    if (add)
      return newState.concat(cartItem)
    return newState
  
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:            
            const fullObject = {
                cartItems: addNewItem(state, action.cartItem)
            }
            return updateObject(state, fullObject);
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