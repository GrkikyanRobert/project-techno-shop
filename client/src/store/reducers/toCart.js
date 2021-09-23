import {ADD_PRODUCT} from "../actions/device";
import {REMOVE_PRODUCT} from "../actions/device";


const product = []

const initialState = {
     product
}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT: {
            const  {item} = action.payload

            const {product} = state



                product.push({
                    ...item,
                    isOrder:false
                })


            return {
                ...state,
                product:product
            }
        }
        case REMOVE_PRODUCT: {
            const  {id} = action.payload

            const {product} = state

           const newProd = product.filter((i)=> id !== i.id)


            return {
                ...state,
                product:newProd
            }
        }

        default: {
            return state;
        }
    }
}
