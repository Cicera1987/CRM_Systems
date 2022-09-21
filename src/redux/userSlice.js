import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'user',
    initialState:{
        username: '',
        password: '',
        islogged: false,
    },
    reducers:{
        changeUser(state, {payload}) {
            return {...state, islogged: true, username: payload, password:payload}
        },
        logout(state){
            return {...state, islogged: false, username: ''}
        }
    }
})

export const {changeUser, logout} = slice.actions

export const selectUser = state => state.user

export default slice.reducer