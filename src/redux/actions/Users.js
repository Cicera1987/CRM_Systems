import *as types from './types'

export function usersLogin(username, password){
    return{
        type: types.USERS,
        payload: { username, password }
    }
}