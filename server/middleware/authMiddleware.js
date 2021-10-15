// import jwt from "jsonwebtoken";
// import HttpError from 'http-errors';
//
// const SECRET_KEY = process.env
//
// const EXCLUDE = [
//     '/user/login',
//     '/user/registration',
// ];
// export default function authorization (req, res, next) {
//     const { url } = req;
//     if ( EXCLUDE.includes(url)|| req.method === "OPTIONS") {
//         next()
//     }
//     try {
//         const token = req.headers.authorization.split(' ')[1]
//         if (!token) {
//             throw HttpError(401, 'Not authorized');
//         }
//         const decoded = jwt.verify(token, SECRET_KEY)
//         req.user = decoded
//         next()
//     } catch (e) {
//
//         throw HttpError(401, 'Not authorized');
//     }
// };
//
import jwt from 'jsonwebtoken';
import HttpError from "http-errors";

const {SECRET_KEY} = process.env;
const EXCLUDE = [
    '/user/login',
    '/user/auth',
    '/user/registration',
    '/type',
    '/brand',
    '/device',
    '/device/one',
    "/device/del",
    "/device/basket",
    "/device/basketAdmin",
    "/device/rate",
    "/device/updateId",
    "/user/refresh_token",
];

export default function authorization(req, res, next) {
    try {
        const {authorization} = req.headers;
        const {path} = req;
        if (EXCLUDE.includes(path) || req.method === 'OPTIONS') {
            next();
            return;
        }
        let token;
        if (authorization) {
            token = authorization.replace('Bearer ', '');
        } else {
            throw HttpError(401, {errors: {noToken: 'Please login to view this'}});
        }
        jwt.verify(token, SECRET_KEY, (err, data) => {
            if (!err) {
                req.userId = data.id
                next();
            } else {
                throw HttpError(401, 'invalid token');
            }
        });
    } catch (e) {
        next(e);
    }
}
