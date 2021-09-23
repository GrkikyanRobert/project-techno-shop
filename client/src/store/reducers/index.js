import {combineReducers} from "redux";
import user  from  "./user"
import device  from  "./device"
import brend  from  "./brend"
import register  from "./register"
import loginins  from "./loginins"
import check  from "./check"
import toCart  from "./toCart"
import basket  from "./basket"



export default combineReducers({
    user,
    device,
    brend,
    register,
    loginins,
    check,
    toCart,
    basket
})
