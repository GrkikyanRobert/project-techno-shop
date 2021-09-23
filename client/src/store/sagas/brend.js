import {takeLatest, call, put} from "redux-saga/effects"
import Api from "../../Api";
import {BREND_LIST_FAIL, BREND_LIST_REQUEST, BREND_LIST_SUCCESS,CREATE_BRAND_REQUEST, CREATE_BRAND_SUCCESS,CREATE_BRAND_FAIL} from "../actions/device";



export default function* watchers() {
    yield  takeLatest(BREND_LIST_REQUEST, hendlBrendList)
    yield  takeLatest(CREATE_BRAND_REQUEST, addBrend)
}

function* hendlBrendList(action) {
    try {
        const {data} = yield call(Api.getBrand)

        yield put({
            type: BREND_LIST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: BREND_LIST_FAIL,
            message: e.message
        })
    }
}

function* addBrend(action) {
    try {
        const {name}=action.payload
        const {data} = yield call(Api.createBrand , name)

        yield put({
            type: CREATE_BRAND_SUCCESS,
            payload: {data}
        })

    } catch (e) {

        yield put({
            type: CREATE_BRAND_FAIL,
            message: e.message,
            payload: {data: e.response?.data}
        })
    }
}

