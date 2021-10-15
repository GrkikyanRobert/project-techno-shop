import {takeLatest, call, put} from "redux-saga/effects"
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CHECK_SUCCESS,
    CHECK_REQUEST,
    CHECK_FAIL
} from "../actions/user";
import Api from "../../Api";

export default function* watcher() {
    yield  takeLatest(REGISTER_REQUEST, registreshen)
    yield  takeLatest(LOGIN_REQUEST, login)
    yield  takeLatest(CHECK_REQUEST, check)
}

function* registreshen(action) {
    try {
        const {email, password, phone} = action.payload
        const {data} = yield call(Api.registr, email, password, phone)

        yield  put({
            type: REGISTER_SUCCESS,
            payload: {data}
        })
    } catch (e) {

        yield put({
            type: REGISTER_FAIL,
            message: e.message,
            payload: {data: e.response?.data}
        })
    }
}

function* login(action) {
    try {
        const {email, password,} = action.payload
        const {data} = yield call(Api.login, email, password)

        yield  put({
            type: LOGIN_SUCCESS,
            payload: {data}

        })
    } catch (e) {
        console.warn(e);

        yield put({
            type: LOGIN_FAIL,
            message: e.message,
            payload: {data: e.response?.data}
        })
    }
}

function* check(action) {
    try {

        const {data} = yield call(Api.check,)
        yield  put({
            type: CHECK_SUCCESS,
            payload: {data}
        })
    } catch (e) {
        yield put({
            type: CHECK_FAIL,
            message: e.message
        })
    }
}
