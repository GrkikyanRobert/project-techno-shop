



export const IS_AUTH_REQUEST = 'GET_MESSAGES_LIST_REQUEST';

export function IsAuthRequest(bool) {
    return {
        type: IS_AUTH_REQUEST,
        payload: { bool}
    }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export function RegisterRequest(email, password,phone){
    return {
        type: REGISTER_REQUEST,
        payload: {
            email, password,phone
        }
    }
}
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export function LoginRequest(email, password){
    return {
        type: LOGIN_REQUEST,
        payload: {
            email, password
        }
    }
}

export const CHECK_REQUEST = 'CHECK_REQUEST';
export const CHECK_SUCCESS = 'CHECK_SUCCESS';
export const CHECK_FAIL = 'CHECK_FAIL';
export function CheckRequest(){
    return {
        type: CHECK_REQUEST,
        payload: {

        }
    }
}




export const  ERROR_MESSAGE = 'ERROR_MESSAGE';
export function ErrorMessage(error){
    return {
        type: ERROR_MESSAGE,
        payload: {
            error
        }
    }
}
