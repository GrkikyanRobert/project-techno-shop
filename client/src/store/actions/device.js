export const TYPE_LIST_REQUEST = 'TYPE_LIST_REQUEST';
export const TYPE_LIST_SUCCESS = 'TYPE_LIST_SUCCESS';
export const TYPE_LIST_FAIL = 'TYPE_LIST_FAIL';

export function typeListRequest() {
    return {
        type: TYPE_LIST_REQUEST,
        payload: {}
    }
}


export const CREATE_TYPE_REQUEST = 'CREATE_TYPE_REQUEST';
export const CREATE_TYPE_SUCCESS = 'CREATE_TYPE_SUCCESS';
export const CREATE_TYPE_FAIL = 'CREATE_TYPE_FAIL';

export function createTypeRequest(name) {
    return {
        type: CREATE_TYPE_REQUEST,
        payload: {name}
    }
}


export const CREATE_BRAND_REQUEST = 'CREATE_BRAND_REQUEST';
export const CREATE_BRAND_SUCCESS = 'CREATE_BRAND_SUCCESS';
export const CREATE_BRAND_FAIL = 'CREATE_BRAND_FAIL';

export function createBrandRequest(name) {
    return {
        type: CREATE_BRAND_REQUEST,
        payload: {name}
    }
}





export const CREATE_DEVICE_REQUEST = 'CREATE_DEVICE_REQUEST';
export const CREATE_DEVICE_SUCCESS = 'CREATE_DEVICE_SUCCESS';
export const CREATE_DEVICE_FAIL = 'CREATE_DEVICE_FAIL';

export function createDeviceRequest(formData) {
    return {
        type: CREATE_DEVICE_REQUEST,
        payload: {formData}
    }
}


export const BREND_LIST_REQUEST = 'BREND_LIST_REQUEST';
export const BREND_LIST_SUCCESS = 'BREND_LIST_SUCCESS';
export const BREND_LIST_FAIL = 'BREND_LIST_FAIL';

export function brendListRequest() {
    return {
        type: BREND_LIST_REQUEST,
        payload: {}
    }
}



export const DEVICE_INFO_REQUEST = 'DEVICE_INFO_REQUEST';
export const DEVICE_INFO_SUCCESS = 'DEVICE_INFO_SUCCESS';
export const DEVICE_INFO_FAIL = 'DEVICE_INFO_FAIL';

export function DeviceInfoRequest(id) {
    return {
        type: DEVICE_INFO_REQUEST,
        payload: {id}
    }
}

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export function Deletedevice(id) {
    return {
        type: DELETE_REQUEST,
        payload: {id}
    }
}



export const DEVICE_LIST_REQUEST = 'DEVICE_LIST_REQUEST';
export const DEVICE_LIST_SUCCESS = 'DEVICE_LIST_SUCCESS';
export const DEVICE_LIST_FAIL = 'DEVICE_LIST_FAIL';

export function DeviceListRequest( brandId, typeId,page, limit, ) {
    return {
        type: DEVICE_LIST_REQUEST,
        payload: { brandId, typeId,page, limit, }
    }
}


export const CREATE_RATE_DEVICE_REQUEST = 'CREATE_RATE_DEVICE_REQUEST';
export const CREATE_RATE_DEVICE_SUCCESS = 'CREATE_RATE_DEVICE_SUCCESS';
export const CREATE_RATE_DEVICE_FAIL = 'CREATE_RATE_DEVICE_FAIL';

export function CreateRateDeviceOne( userId, deviceId ) {
    return {
        type: CREATE_RATE_DEVICE_REQUEST,
        payload: { userId, deviceId }
    }
}

export const All_RATE_DEVICE_REQUEST = 'All_RATE_DEVICE_REQUEST';
export const All_RATE_DEVICE_SUCCESS = 'All_RATE_DEVICE_SUCCESS';
export const All_RATE_DEVICE_FAIL = 'All_RATE_DEVICE_FAIL';

export function CreateRateDeviceAll() {
    return {
        type: All_RATE_DEVICE_REQUEST,
        payload: {}
    }
}

export const UPDATE_RATE_DEVICE_REQUEST = 'UPDATE_RATE_DEVICE_REQUEST';
export const UPDATE_RATE_DEVICE_SUCCESS = 'UPDATE_RATE_DEVICE_SUCCESS';
export const UPDATE_RATE_DEVICE_FAIL = 'UPDATE_RATE_DEVICE_FAIL';

export function UpdateRateDeviceOne( id ) {
    return {
        type: UPDATE_RATE_DEVICE_REQUEST,
        payload: { id }
    }
}




export const BASKETADMIN_REQUEST = 'BASKETADMIN_REQUEST';
export const BASKETADMIN_SUCCESS = 'BASKETADMIN_SUCCESS';
export const BASKETADMIN_FAIL = 'BASKETADMIN_FAIL';

export function UpdatebasketAdmin() {
    return {
        type: BASKETADMIN_REQUEST,
        payload: {}
    }
}



export const BASKETADMIN_REQUEST_GET = 'BASKETADMIN_REQUEST_GET';
export const BASKETADMIN_SUCCESS_GET = 'BASKETADMIN_SUCCESS_GET';
export const BASKETADMIN_FAIL_GET = 'BASKETADMIN_FAIL_GET';

export function UpdatebasketAdminGet() {
    return {
        type: BASKETADMIN_REQUEST_GET,
        payload: {}
    }
}
export const BREND_ALL = 'BREND_ALL';

export function brendAll() {
    return {
        type: BREND_ALL,
        payload: {}
    }
}














export const ADD_PRODUCT = 'ADD_PRODUCT';


export function AddToCart( item ) {
    return {
        type: ADD_PRODUCT,
        payload: { item }
    }
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';


export function removeItem( id ) {
    return {
        type: REMOVE_PRODUCT,
        payload: { id }
    }
}

