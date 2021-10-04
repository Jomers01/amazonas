import { typesFirebase } from "../types/types";

export const detail = (state = {}, action)=> {
    switch (action.type) {
        case typesFirebase.detail:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}