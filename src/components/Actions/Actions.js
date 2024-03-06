
export const LoginAction = (userData) => {
    return {
        type: 'LOGIN',
        payload: userData
    };
};

export const Logout = () => {
    return {
        type: 'LOGOUT'
    };
};
