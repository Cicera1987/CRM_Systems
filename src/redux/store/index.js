import { createStore } from 'redux'

const initialState = {
    users: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {  
        case 'USERS':
            const newState = { ...state };
            newState.users = !newState.users;
            return newState;


        default:
            return state;
    }

};

const store = createStore(reducer)


export default store