import {
    BASKET_CREATE_SUCCESS,
    BASKET_ALL_SUCCESS,
} from "../actions/basket";

const initialState = {
    basketAll:[]

}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case BASKET_CREATE_SUCCESS: {

            const  {BasketCreate}= action.payload.data;
            return {
                ...state,
                BasketCreate
            }
        }
        case BASKET_ALL_SUCCESS: {
            return {
                ...state,
                basketAll:action.payload.data.BasketAll
            }
        }
        default: {
            return state;
        }
    }
}
