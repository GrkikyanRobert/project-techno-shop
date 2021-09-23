import {takeLatest, call, put} from "redux-saga/effects"
import Api from "../../Api";
import {
    BASKET_ALL_FAIL,BASKET_ALL_REQUEST,BASKET_ALL_SUCCESS,
    BASKET_CREATE_FAIL,BASKET_CREATE_REQUEST,BASKET_CREATE_SUCCESS

} from "../actions/basket";


export default function* watchers() {
    yield  takeLatest(BASKET_CREATE_REQUEST, bascketCreate)
    yield  takeLatest(BASKET_ALL_REQUEST, bascketAll)
}

function* bascketCreate(action) {
    try {
        const {count,praductId,userId,phone}=action.payload
        const {data} = yield call(Api.basketCreateApi,count,praductId,userId ,phone )

        yield put({
            type: BASKET_CREATE_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: BASKET_CREATE_FAIL,
            message: e.message
        })
    }
}

function* bascketAll(action) {
    try {

        const {data} = yield call(Api.basketAllApi )

        yield put({
            type: BASKET_ALL_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        console.warn(e);
        yield put({
            type: BASKET_ALL_FAIL,
            message: e.message
        })
    }
}

