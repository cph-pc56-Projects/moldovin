import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orderId: 1,
    items: [{name: 'Lacrima Dulce', id: '126321', quantity: 1}],
    description: 'First Redux order'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (actionTypes.ADD_ORDER):
            return updateObject(state, {orderId: state.orderId + 1});
        default:
            return state;
    }
}

export default reducer;