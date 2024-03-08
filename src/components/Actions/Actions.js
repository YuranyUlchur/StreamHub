
// Function to create a login action with user data
export const LoginAction = (userData) => {
    return {
        type: 'LOGIN',
        payload: userData
    };
};

// Function to create a logout action
export const Logout = () => {
    return {
        type: 'LOGOUT'
    };
};
