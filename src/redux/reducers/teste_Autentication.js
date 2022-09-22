//importando redux e create store
const redux = require('redux')
const createStore = redux.createStore

const CHANCHE_USER = 'CHANCHE_USER';
const LOGOUT = 'LOGOUT';

//actions

function changeUser(user) {
    return {
        type: CHANCHE_USER,
        info: 'Change the current user',
        payload: user
    }
}

function logout() {
    return {
        type: LOGOUT,
        info: "Logout the current user",
    }
}

// estado inicial
const initialState = {
    user: '',
    islogged: false
}

// reducers

function userReducer(prevState = initialState, action) {
    switch (action.type) {
        case CHANCHE_USER:
            return {
                ...prevState,
                user: action.payload,
                islogged: true
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                islogged: false
            }
        default:
            return prevState
    }
}

//store
const store = createStore(userReducer)

console.log('Initial state', store.getState())
store.dispatch(changeUser("admin"))
console.log('New state', store.getState())
store.dispatch(logout())
console.log('State Logout', store.getState())