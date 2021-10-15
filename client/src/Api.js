import axios from "axios";
import toFormData from "object-to-formdata"
import Storage from "./helpers/Account"

const api = axios.create({
    baseURL: "http://localhost:5000"
})

api.interceptors.request.use((config) => {
    const token = Storage.getToken('token');
    if (token) {
        config.headers.authorization = token;
    }
    return config;
});



api.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const originalRequest = error.config;
        const refreshToken = Storage.getResetToken();
        if (refreshToken && error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await api.post("/user/refresh_token", {refreshToken});
                if (res.status === 200) {
                    const {accessToken} = res.data;
                    Storage.setToken(accessToken);
                    return api(originalRequest);
                }
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
        return Promise.reject(error);
    }
);


class Api {
    static getTypes() {
        return api.get("/type")
    }

    static createTypes(name) {
        return api.post("/type", {name})
    }


    static getBrand() {
        return api.get("/brand")
    }

    static createBrand(name) {
        return api.post("/brand", {name})
    }

    static createDevice(data) {
        return api.post("/device", toFormData.serialize(data))


    }

    static getDevice(brandId, typeId, page, limit,) {
        return api.get("/device", {
            params: {
                brandId, typeId, page, limit,
            }
        })
    }

    static getDeviceInfo(id) {
        return api.get(`/device/one`, {
            params: {id}
        })
    }

    static delete(id) {
        return api.post("/device/del", {id})
    }

    static registr(email, password, phone) {
        return api.post('/user/registration', {email, password, phone, role: "USER"})
    }

    static login(email, password) {
        return api.post('/user/login', {email, password})
    }

    static check() {
        return api.get('/user/auth')
    }

    static basketCreateApi(count, praductId, userId, phone) {
        return api.post('/device/basket', {count, praductId, userId, phone})
    }

    static basketAllApi() {
        return api.get('/device/basket')
    }


    static CreateRateDevice(userId, deviceId) {
        return api.post('/device/rate', {userId, deviceId})
    }

    static CreateRateDeviceall() {
        return api.get('/device/rateAll')
    }


    static UpdateRateDevice(id) {
        return api.put('/device/updateId', {id})
    }


    static UpdatebasketAdmin() {
        return api.post('/device/basketAdmin')
    }

    static UpdatebasketAdminGet() {
        return api.get('/device/basketAdmin')
    }


}


export default Api
