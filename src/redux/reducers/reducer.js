/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    users: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'USERS': {
            const newState = { ...state };
            newState.users = !newState.users;
            return newState;
        }
        default: {
            return state;
        }

    }

};