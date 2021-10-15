// class Account {
//
//     static get = () => {
//         try {
//             return JSON.parse(localStorage.getItem('account'))
//         } catch (e) {
//             return {};
//         }
//     }
//
//     static  set = (account) => {
//         return localStorage.setItem('account', JSON.stringify(account))
//     }
//
//
//     static setToken = (token) => {
//         localStorage.setItem('token', token)
//     }
//
//     static getToken = () => {
//         return localStorage.getItem('token');
//     }
//
//     static getResetToken() {
//         return localStorage.getItem('reset-token')
//     }
//
//     static setResetToken(token) {
//         localStorage.setItem('reset-token', token);
//     }
//
//     static delete = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('reset-token');
//         localStorage.removeItem('account');
//     }
// }
//
// export default Account


import Cookies from 'js-cookie'

class Account {


    static get = () => {
        try {
            return JSON.parse(localStorage.getItem('account'))
        } catch (e) {
            return {};
        }
    }

    static  set = (account) => {
        return localStorage.setItem('account', JSON.stringify(account))
    }


    static setToken = (token) => {
        localStorage.setItem('token', token)
    }

    static getToken = () => {
        return localStorage.getItem('token');
    }

    static getResetToken() {
        return Cookies.get('reset-token')
    }

    static setResetToken(token) {
        Cookies.set('reset-token', token);
    }

    static delete = () => {
        localStorage.removeItem('token');
        Cookies.remove('reset-token');
        localStorage.removeItem('account');
    }
}

export default Account

