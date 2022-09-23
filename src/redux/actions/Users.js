import *as types from '../types/types'

export function usersLogin(payload){
    return{
        type: types.USERS,
        payload,
    }
}