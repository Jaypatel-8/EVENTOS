import { createStore , combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { profileReducer,profileDetailsReducer} from './reducers/profileReducers'
import { authReducer,userReducer,forgotPasswordReducer  } from './reducers/userReducers';

const reducer = combineReducers({
    profiles:profileReducer,
    profiledetails:profileDetailsReducer,
    auth:authReducer, 
    user:userReducer,
    forgotPassword :forgotPasswordReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;