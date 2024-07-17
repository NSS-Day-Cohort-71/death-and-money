export const isAuthenticated = () => {
    return localStorage.getItem("death_token") !== null
}

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem("death_token"))
}