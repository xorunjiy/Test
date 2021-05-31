export const getTokenFromLS = () => JSON.parse(localStorage.getItem('userToken'));

export const setTokenLS = token => {
    localStorage.setItem('userToken', JSON.stringify(token));
}