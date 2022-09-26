import {toast} from 'react-toastify'
import {call, put, all,takeLatest } from 'redux-saga/effects'
import *as  actions from '../actions/Users'
import *as types from '../types/types'

const requiste = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve() 
        }, 2000);
});

function* loginRequest(payload){
    
    try {
        yield call(requiste, payload);
        yield put(actions.usersLoginSucess());


    }catch{
        yield put(actions.usersLoginFailure());

    }

}

export default all([
takeLatest(types.USERS_REQUEST,loginRequest )
])