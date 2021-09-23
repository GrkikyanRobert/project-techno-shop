import {IS_AUTH_REQUEST,REGISTER_SUCCESS,} from "../actions/user";
import Account from "../../helpers/Account";

const initialState = {
    isAuth:true,
}
export default function reducer(state = initialState, action) {

    switch (action.type) {

        case IS_AUTH_REQUEST:{
            Account.delete()

            return {
                ...state,

                isAuth:action.payload.bool,

            }
        }

        case REGISTER_SUCCESS:{
            return {

                ...state,

            }
        }

        default: {
            return state;
        }
    }
}
