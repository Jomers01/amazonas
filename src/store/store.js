//Dependencias
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { detail } from "../reducers/detailReducer";
//Componentes y funciones
import { loginReducer } from "../reducers/loginReducer";
import { productReducer } from "../reducers/productReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const reducer = combineReducers({
     loginGoogle: loginReducer,
     products: productReducer,
     detail: detail
     
 })

 export const store = createStore(
     reducer,
     composeEnhancers(applyMiddleware(thunk))
 )