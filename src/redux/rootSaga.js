import {all} from 'redux-saga/effects'


import loginRequest from './sagas/sagas'

export default function* rootSaga() {
    return yield all([loginRequest]);
}