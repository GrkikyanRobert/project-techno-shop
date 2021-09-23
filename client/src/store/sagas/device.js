import {takeLatest, call, put} from "redux-saga/effects"
import {
    DEVICE_INFO_FAIL,
    DEVICE_INFO_REQUEST, DEVICE_INFO_SUCCESS,
    DEVICE_LIST_FAIL,
    DEVICE_LIST_REQUEST,
    DEVICE_LIST_SUCCESS,
    TYPE_LIST_FAIL,
    TYPE_LIST_REQUEST,
    TYPE_LIST_SUCCESS,
    CREATE_TYPE_REQUEST,
    CREATE_TYPE_SUCCESS,
    CREATE_TYPE_FAIL,
    CREATE_DEVICE_REQUEST,
    CREATE_DEVICE_SUCCESS,
    CREATE_DEVICE_FAIL,
    DELETE_SUCCESS,
    DELETE_FAIL,
    DELETE_REQUEST,
    CREATE_RATE_DEVICE_REQUEST,
    CREATE_RATE_DEVICE_SUCCESS,
    CREATE_RATE_DEVICE_FAIL,
    UPDATE_RATE_DEVICE_REQUEST,
    UPDATE_RATE_DEVICE_SUCCESS,
    UPDATE_RATE_DEVICE_FAIL,
    BASKETADMIN_REQUEST,
    BASKETADMIN_SUCCESS,
    BASKETADMIN_FAIL,
    All_RATE_DEVICE_REQUEST,
    All_RATE_DEVICE_SUCCESS,
    All_RATE_DEVICE_FAIL,

    BASKETADMIN_REQUEST_GET,
    BASKETADMIN_SUCCESS_GET,
    BASKETADMIN_FAIL_GET

} from "../actions/device";
import Api from "../../Api";

export default function* watchers() {
    yield  takeLatest(TYPE_LIST_REQUEST, hendlTypeList)
    yield  takeLatest(DEVICE_LIST_REQUEST, hendlDeviceList)
    yield  takeLatest(DEVICE_INFO_REQUEST, hendlDeviceInfo)
    yield  takeLatest(CREATE_TYPE_REQUEST, addTayp)
    yield  takeLatest(CREATE_DEVICE_REQUEST, addDevice)
    yield  takeLatest(DELETE_REQUEST, deletedevice)
    yield  takeLatest(CREATE_RATE_DEVICE_REQUEST, createReting)
    yield  takeLatest(All_RATE_DEVICE_REQUEST, createRetingAll)
    yield  takeLatest(UPDATE_RATE_DEVICE_REQUEST, updateReting)
    yield  takeLatest(BASKETADMIN_REQUEST, updateAdmin)
    yield  takeLatest(BASKETADMIN_REQUEST_GET, updateAdminGet)
}

function* updateAdminGet(action) {

    try {

        const {data} = yield call(Api.UpdatebasketAdminGet)

        yield put({
            type: BASKETADMIN_SUCCESS_GET,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: BASKETADMIN_FAIL_GET,
            message: e.message
        })
    }
}



function* createRetingAll(action) {

    try {

        const {data} = yield call(Api.CreateRateDeviceall)

        yield put({
            type: All_RATE_DEVICE_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: All_RATE_DEVICE_FAIL,
            message: e.message
        })
    }
}




function* updateAdmin(action) {

    try {

        const {data} = yield call(Api.UpdatebasketAdmin)

        yield put({
            type: BASKETADMIN_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: BASKETADMIN_FAIL,
            message: e.message
        })
    }
}


function* updateReting(action) {

    try {
        const {id}=action.payload
        const {data} = yield call(Api.UpdateRateDevice,id)

        yield put({
            type: UPDATE_RATE_DEVICE_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: UPDATE_RATE_DEVICE_FAIL,
            message: e.message
        })
    }
}


function* createReting(action) {

    try {
        const {userId, deviceId}=action.payload
        const {data} = yield call(Api.CreateRateDevice,userId, deviceId)
        yield put({
            type: CREATE_RATE_DEVICE_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: CREATE_RATE_DEVICE_FAIL,
            message: e.message
        })
    }
}


function* hendlTypeList(action) {
    try {
        const {data} = yield call(Api.getTypes)

        yield put({
            type: TYPE_LIST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: TYPE_LIST_FAIL,
            message: e.message
        })
    }
}


function* hendlDeviceList(action) {
    try {
        const { brandId, typeId,page, limit, } = action.payload
        const {data} = yield call(Api.getDevice, brandId, typeId,page, limit, )

        yield  put({
            type: DEVICE_LIST_SUCCESS,
            payload: {data}

        })
    } catch (e) {
        yield put({
            type: DEVICE_LIST_FAIL,
            message: e.message
        })
    }
}

function* hendlDeviceInfo(action) {
    try {
        const {id} = action.payload
        const {data} = yield call(Api.getDeviceInfo, id)
        yield  put({
            type: DEVICE_INFO_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: DEVICE_INFO_FAIL,
            message: e.message
        })
    }
}

function* deletedevice(action) {
    try {
        const {id} = action.payload
        const {data} = yield call(Api.delete, id)
        yield  put({
            type: DELETE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: DELETE_FAIL,
            message: e.message
        })
    }
}

function* addTayp(action) {
    try {
        const {name} = action.payload
        const {data} = yield call(Api.createTypes, name)
        yield  put({
            type: CREATE_TYPE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: CREATE_TYPE_FAIL,
            message: e.message,
            payload: {data: e.response?.data}
        })
    }
}

function* addDevice(action) {
    try {
        const {formData} = action.payload
        const {data} = yield call(Api.createDevice, formData)
        yield  put({
            type: CREATE_DEVICE_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: CREATE_DEVICE_FAIL,
            message: e.message,
            payload: {data: e.response?.data}
        })
    }
}




