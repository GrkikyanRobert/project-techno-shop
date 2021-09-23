import {BREND_LIST_REQUEST, BREND_LIST_SUCCESS,CREATE_BRAND_SUCCESS, CREATE_BRAND_FAIL,BREND_ALL} from "../actions/device";

const initialState = {
    brendList:[],
    brendListError:"",
    brendAll:[]
}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case BREND_LIST_REQUEST:{
            return {
                state,
                brendList:[],

            }
        }
        case BREND_LIST_SUCCESS:{

            const  {data}= action.payload;
            return {
                ...state,
                brendList:data.brend,
                brendListError:  ""

            }
        }
        case CREATE_BRAND_SUCCESS:{
            const  {brand}= action.payload.data;

            return {
                ...state,
                brand,
                brendListError:  "Бренд успешно добавлен"
            }
        }
        case CREATE_BRAND_FAIL:{

            return {
                ...state,
                brendListError:action.payload.data.errors,
            }
        }

        case BREND_ALL:{


            return {
                ...state,
                brendAll:[]
            }
        }


        default: {
            return state;
        }
    }
}
