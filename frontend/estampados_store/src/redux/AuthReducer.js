import { types } from "../types/type";


/*
    {
        nombre:
        token:
    }
*/
export const AuthReducer = (state={},action) => {
    switch (action.type) {
        case types.login:
            return {
                nombre:action.payload.nombre,
                token:action.payload.token,
            }
        case types.logout:
            return{}
    
        default:
            return state;
    }
}
