import *as types from '../types/types'

export function usersLoginRequest(payload){
    return{
        type: types.USERS_REQUEST,
        payload,
    }
}

export function usersLoginSucess(payload) {
    return {
        type: types.USERS_SUCESS,
        payload,
    }
}

export function usersLoginFailure(payload) {
    return {
        type: types.USERS_FAILURE,
        payload,
    }
}