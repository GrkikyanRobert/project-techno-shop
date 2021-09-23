import {CHECK_SUCCESS,} from "../actions/user";

const initialState = {}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case CHECK_SUCCESS: {

            return {
                ...state,


            }
        }
        default: {
            return state;
        }
    }
}
