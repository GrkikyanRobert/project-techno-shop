

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

    static delete = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('account');
    }
}

export default Account
