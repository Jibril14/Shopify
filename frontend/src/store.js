import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer,
        productCreateReducer, productDeleteReducer,
        productUpdateReducer, productReviewCreateReducer,
        productTopRatedReducer,
        
       } from './store/reducers/productReducers';

import { cartReducer, shippingAddress } from './store/reducers/cartReducers';

import { userLoginReducer, userRegistrationReducer, 
         userDetailsReducer,  userUpdateProfile,
         userListReducer, userDeleteReducer,
          userUpdateReducer  } from './store/reducers/userReducers';

import { orderCreateReducer,  orderDetailsReducer,
         orderPayReducer, orderListMyReducer,
         orderListReducer, orderDeliverReducer,
   }  from './store/reducers/orderReducers';



const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  productCreate: productCreateReducer ,
  productDelete: productDeleteReducer ,
  productUpdate: productUpdateReducer,
  orderDeliver: orderDeliverReducer, 
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,

  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegistration: userRegistrationReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfile ,
  orderCreate: orderCreateReducer,
  shippingAddress: shippingAddress,

  orderDetails:  orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,

  userList: userListReducer,
  userDelete: userDeleteReducer ,
  userUpdate:  userUpdateReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')  ?
   JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')  ?
   JSON.parse(localStorage.getItem('shippingAddressd')) : null


const userInfoFromStorage = localStorage.getItem('userInfo')  ?
   JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {

    cart:{ cartItems: cartItemsFromStorage,
         
    },


    userLogin:{ userInfo:  userInfoFromStorage}
       

   
}

const middleware =[thunk]

const store =createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) ) ;



export default store