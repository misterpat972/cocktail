// import des serivces axios
import Axios from './caller.service';


let login = (credentials) => {
    return Axios.post('/login', credentials);
}

let logout = () => {
    localStorage.removeItem('token');
}

let saveToken = (token) => {
    localStorage.setItem('token', token);
}

let isLogged = () => {
    let token = localStorage.getItem('token');
    return token !== null;
}

export const accountService = {
    login,
    logout,
    saveToken,
    isLogged
};