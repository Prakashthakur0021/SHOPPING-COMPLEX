import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { productReducers, productDetailsReducers } from './reducers/productReducers'
import {cartReducers } from './reducers/cartReducers'

const reducers = combineReducers({
    productList : productReducers,
    productDetails : productDetailsReducers,
    cart : cartReducers
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
}

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store