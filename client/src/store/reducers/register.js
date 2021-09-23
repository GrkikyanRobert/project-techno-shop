import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL} from "../actions/user";


const initialState = {
    Register_Error:""
}
export default function reducer(state = initialState, action) {

    switch (action.type) {

        case REGISTER_REQUEST:{

            return {
                ...state,
                Register_Error:" "
            }
        }
        case REGISTER_SUCCESS:{
            const  {user}= action.payload.data;


            return {
                ...state,
                user,
                   }
        }
        case REGISTER_FAIL:{


            return {
                ...state,
                Register_Error:action.payload.data.errors
            }
        }
        default: {
            return state;
        }
    }
}
