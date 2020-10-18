import { types } from "../types/type"

export const authloginAction=(nombre,token)=>{
    return{
        type:types.login,
        payload:{
            nombre:nombre,
            token:token
        }
    }
}