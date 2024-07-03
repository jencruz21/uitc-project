export const getAuthToken = () => {
    return localStorage.getItem("token");
}

export const setToken = (token) => {
    localStorage.setItem("token", token);
}

export const isAuth = () => {
    return getAuthToken() ? true : false;
}

export const logout = () => {
    localStorage.removeItem("token");
}
