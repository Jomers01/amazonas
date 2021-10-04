import { typesFirebase } from '../types/types'

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action)=> {
    switch (action.type) {
        case typesFirebase.get:
            return {
                ...state,
                products: action.payload
            }
        case typesFirebase.post:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case typesFirebase.delete:
            return {
                products: state.products.filter(prod => prod.id !== action.payload)
            }
        default:
            return state;
    }
}