//Componentes
import { typesLogin } from "../types/types";

export const loginReducer = (state = {}, action)=> {
    switch (action.type) {
        case typesLogin.loginGoogle:
            return {
                email: action.payload.email,
                name: action.payload.displayName
            }
        default:
            return state
    }
}