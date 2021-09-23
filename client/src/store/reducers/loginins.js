import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL,} from "../actions/user";
import Account from '../../helpers/Account'
const initialState = {
    myAccount: Account.get(),
    token: Account.getToken(),
    userList: [],
    errors:{},
    Error_Message:""
};


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_REQUEST: {

            return {
                ...state,
                Error_Message:"",
            }
        }
        case LOGIN_SUCCESS: {
            const { token, user: myAccount } = action.payload.data;
            Account.set(myAccount);
            Account.setToken(token);
            return {
                ...state,
                userList: myAccount,
                token,
                myAccount

            }
        }

        case LOGIN_FAIL: {



            return {
                ...state,
                Error_Message: action.payload.data.errors,

            }
        }


        default: {
            return state;
        }
    }
}
