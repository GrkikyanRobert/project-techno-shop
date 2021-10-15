import HttpError from 'http-errors';
import { User } from "../models/index";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import _ from "lodash";

const {SECRET_KEY, REFRESH_SECRET_KEY} = process.env

// const generateJwt = (id, email, role) => {
//     return jwt.sign(
//         {id, email, role},
//         SECRET_KEY,
//         {expiresIn: '24h'}
//     )
// }


class UserController {


    static  registration = async (req, res, next) => {
        try {
            const {email, password, phone, role} = req.body


            if (!email || !password) {
                throw HttpError(404, {errors: 'Неверный адрес электронной почты или пароль'});
            }
            const emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
            if (!emailValidation) {
                throw HttpError(404, {errors: 'Вы ввели неверный адрес электронной почты!'});
            }

            const phoneValidation = /^\+?[0-9]+/.test(phone)
            if (!phoneValidation) {
                throw HttpError(404, {errors: 'Вы ввели неверный номер!'});
            }


            const passwordValidation = /^[A-Za-z\d]{8,}$/.test(password)
            if (!passwordValidation) {
                throw HttpError(404, {errors: 'Пароль должен содержать не менее 8 символов .'});
            }

            const candidate = await User.findOne({
                where: {
                    email
                }
            })
            if (candidate) {
                throw HttpError(404, {errors: 'Неверный адрес электронной почты !'});
            }
            const hashPassword = await bcrypt.hash(password, 3)

            const user = await User.create({email, role, password: hashPassword, phone})

            res.json({
                user
            })


        } catch (e) {
            next(e)
        }
    }

    static  login = async (req, res, next) => {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email
                }
            })


            let comparePassword = bcrypt.compareSync(password, user ? user.getDataValue('password') : '')

            if (!user || !comparePassword) {
                // res.status(403).json({
                //     errors: {
                //         status: 'invalid email or password',
                //     },
                // });
                // return;
                throw HttpError(403, {errors: "неверный адрес электронной почты или пароль"});
            }

            const token = jwt.sign({
                id: user.id,
                email: user.email,
                role: user.role
            }, SECRET_KEY, {expiresIn: '1m'});

            const refresh_token = jwt.sign({
                id: user.id,
                email: user.email,
                role: user.role
            }, REFRESH_SECRET_KEY, {expiresIn: '1d'});

            await User.update({refreshToken: refresh_token}, {
                where: {
                    email
                }
            })

            res.json({
                user,
                token,
                refresh_token
            })
        } catch (e) {
            next(e)
        }
    }

    static resetToken = async (req, res, next) => {
        try {
            const {refreshToken} = req.body;

            if (!refreshToken) {
                return res.json({
                    error: 'error'
                });
            }
            const user = await User.findOne({
                where: {refreshToken: refreshToken}
            });

            if (_.isEmpty(user)) {
                return res.status(401).json({error: 'not_authenticate'});
            }

            jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, data) => {
                if (!err) {
                    const accessToken = jwt.sign({
                        id: data.id,
                        email: data.email,
                        role: data.role
                    }, SECRET_KEY, {expiresIn: '1m'});
                    return res.json({
                        accessToken
                    });
                } else {
                    throw HttpError(401, {status: false, errors: 'not_authenticate', data: null});
                }
            });
        } catch (e) {
            next(e);
        }
    }

    static  check = async (req, res, next) => {
        try {
            const user = await User.findByPk(req.userId);


            res.json({
                status: "ok",
                user,

            })


        } catch (e) {
            next(e)

        }
    }

}

export default UserController
