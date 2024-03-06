import { combineReducers } from 'redux'; 

const initialState = {
    isLoggedIn: false,
    userData: {}
};

export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                userData: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                userData: {}
            };
        default:
            return state;
    }
};

export default combineReducers({
    auth: AuthReducer
});
