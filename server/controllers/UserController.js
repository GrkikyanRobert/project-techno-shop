import HttpError from 'http-errors';
import {User} from "../models/index";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const {SECRET_KEY} = process.env

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {


    static  registration = async (req, res, next) => {
        try {
            const {email, password,phone, role} = req.body


            if (!email || !password) {
                throw HttpError(404,{errors: 'Неверный адрес электронной почты или пароль'} );
            }
            const emailValidation  = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
            if (!emailValidation) {
                throw HttpError(404,{ errors: 'Вы ввели неверный адрес электронной почты!'} );
            }

            const phoneValidation  = /^\+?[0-9]+/.test(phone)
            if (!phoneValidation) {
                throw HttpError(404,{ errors: 'Вы ввели неверный номер!'} );
            }


            const passwordValidation = /^[A-Za-z\d]{8,}$/.test(password)
            if (!passwordValidation) {
                throw HttpError(404,{errors:'Пароль должен содержать не менее 8 символов .'} );
            }

            const candidate = await User.findOne({
                where: {
                    email
                }
            })
            if (candidate) {
                throw HttpError(404, { errors :'Неверный адрес электронной почты !'});
            }
            const hashPassword = await bcrypt.hash(password, 3)

            const user = await User.create({email, role, password: hashPassword,phone})




             // await Basket.create({userId: user.id})
            // const token = generateJwt(user.id, user.email, user.role)
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

            // const token = generateJwt(user.id, user.email, user.role)
            const token = jwt.sign({id: user.id, email: user.email, role: user.role}, SECRET_KEY);


            res.json({
                user,
                token
            })
        } catch (e) {
            next(e)
        }
    }

    static  check = async (req, res, next) => {
        try {
            console.log(8877777777777777777777777777777777777777777999)
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
