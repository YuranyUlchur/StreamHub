import { combineReducers } from 'redux'; 

// Define initial state for authentication
const initialState = {
    isLoggedIn: false,
    userData: {}
};

// RootReducer to manage the state of the application
export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// AuthReducer to manage authentication-related actions
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

// Combine all reducers into one rootReducer
export default combineReducers({
    auth: AuthReducer
});
