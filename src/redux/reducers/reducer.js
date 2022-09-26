/* eslint-disable import/no-anonymous-default-export */
import *as types from '../types/types'
const initialState = {
    users: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.USERS_SUCESS: {
            const newState = { ...state };
            newState.users = !newState.users;
            return newState;
        }
        case types.USERS_REQUEST: {
            console.log('Requisição solicitada')
            return state
        }
        case types.USERS_FAILURE: {
            console.log('Requisição falhou!')
            return state
        }
        default: {
            return state;
        }

    }

};