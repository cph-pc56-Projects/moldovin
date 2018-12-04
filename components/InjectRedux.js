
// Setting up redux in the layout component as it is the one
// who wraps every other component in the app

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import orderReducer from '../store/reducers/order';
import productsReducer from '../store/reducers/products';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    order: orderReducer,
    products: productsReducer
})
// compose enhancer is for redux plugin in dev tools
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const InjectRedux = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}

export default InjectRedux;