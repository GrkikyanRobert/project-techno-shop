export const BASKET_CREATE_REQUEST = 'BASKET_CREATE_REQUEST';
export const BASKET_CREATE_SUCCESS = 'BASKET_CREATE_SUCCESS';
export const BASKET_CREATE_FAIL = 'BASKET_CREATE_FAIL';
export function createBasket(count, praductId, userId,phone){
    return {
        type: BASKET_CREATE_REQUEST,
        payload: {
            count, praductId, userId,phone
        }
    }
}

export const BASKET_ALL_REQUEST = 'BASKET_ALL_REQUEST';
export const BASKET_ALL_SUCCESS = 'BASKET_ALL_SUCCESS';
export const BASKET_ALL_FAIL = 'BASKET_ALL_FAIL';
export function AllBasket(){
    return {
        type: BASKET_ALL_REQUEST,
        payload: { }
    }
}
