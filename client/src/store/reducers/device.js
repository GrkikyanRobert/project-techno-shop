import {
    TYPE_LIST_SUCCESS,
    TYPE_LIST_REQUEST,
    DEVICE_LIST_SUCCESS,
    DEVICE_LIST_REQUEST,
    DEVICE_INFO_SUCCESS,
    CREATE_TYPE_SUCCESS,
    CREATE_DEVICE_SUCCESS,
    CREATE_DEVICE_FAIL,
    CREATE_TYPE_FAIL,
    DELETE_SUCCESS,
    BASKETADMIN_REQUEST,
    BASKETADMIN_SUCCESS,
    All_RATE_DEVICE_SUCCESS,
    BASKETADMIN_SUCCESS_GET, CREATE_DEVICE_REQUEST,


} from "../actions/device";

const initialState = {
    typeList: [],
    deviceList: [],
    AdminBasket: [],
    AdminBasketAll: [],
    deviceInfo: [],
    createDevice: [],
    typeListError: "",
    deviceListError: "",
    totalCount: "",
    page: '',
    limit: '',
    offset: '',
    aaa: "",
    DeleteDeviceId: "",
    rate: [],

}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case TYPE_LIST_REQUEST: {

            return {
                ...state,
                page: 1

            }
        }
        case TYPE_LIST_SUCCESS: {

            const {data} = action.payload;
            return {
                ...state,
                typeList: data.types,
                page: 1

            }
        }

        case DEVICE_LIST_REQUEST: {


            return {
                ...state,
                deviceList: [],

            }
        }
        case DEVICE_LIST_SUCCESS: {

            const {devices, offset, page, limit,} = action.payload.data;

            return {
                ...state,
                deviceList: devices.rows,
                totalCount: devices.count,
                page: page || 1,
                limit: limit,
                offset: offset
            }
        }


        case DEVICE_INFO_SUCCESS: {
            const {device} = action.payload.data;

            return {
                ...state,
                deviceInfo: device
            }
        }
        case DELETE_SUCCESS: {
            const {id} = action.payload.data;

            return {
                ...state,
                DeleteDeviceId: id
            }
        }

        case CREATE_TYPE_SUCCESS: {
            const {type} = action.payload.data;
            return {
                ...state,
                type,
                typeListError: "Тип успешно добавлен"
            }
        }
        case CREATE_TYPE_FAIL: {

            return {
                ...state,

                typeListError: action.payload.data.errors,
            }
        }


        case CREATE_DEVICE_REQUEST: {
            return {
                ...state,
                deviceListError:""

            }
        }


        case CREATE_DEVICE_SUCCESS: {
            const {device} = action.payload.data;
            return {
                ...state,
                createDevice: device,

            }
        }
        case CREATE_DEVICE_FAIL: {

            return {

                ...state,
                deviceListError: action.payload.data.errors,

            }
        }


        case BASKETADMIN_REQUEST: {
            return {
                ...state,
                AdminBasket: []

            }
        }

        case BASKETADMIN_SUCCESS: {

            const {data} = action.payload;

            return {
                ...state,
                AdminBasket: data.basketAdmin

            }
        }

        case All_RATE_DEVICE_SUCCESS: {

            const {data} = action.payload;
            return {
                ...state,
                rate: data.rateAll

            }
        }


        case BASKETADMIN_SUCCESS_GET: {

            const {data} = action.payload;

            return {
                ...state,
                AdminBasketAll: data.basketAdmin

            }
        }


        default: {
            return state;
        }
    }
}
