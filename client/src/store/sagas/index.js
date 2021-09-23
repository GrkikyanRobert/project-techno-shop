import {fork, all} from 'redux-saga/effects';
import user from "./user"
import device from "./device"
import brend from "./brend"
import basket from "./basket"
export default function* watchers() {
    return yield all([
        user,
        device,
        brend,
        basket
    ].map(fork))
}
