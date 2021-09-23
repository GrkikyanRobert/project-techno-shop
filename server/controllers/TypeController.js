import {Brand, Type} from "../models/index"
import HttpError from "http-errors";

class TypeController {
    static  create = async (req, res, next) => {
        try {
            const {name} = req.body

            const x = await Type.findOne({
                where: {
                    name
                }
            })
            if (x) {
                throw HttpError(403, { errors :'Тип с таким именём уже существует !'});
            }

            const type = await Type.create({name})

            res.json({
                status: 'ok',
                type
            })
        } catch (e) {
            next(e)
        }
    }

    static  getAll = async (req, res, next) => {
        try {
            const types = await Type.findAll()
            res.json({
                status: 'ok',
                types
            })

        } catch (e) {
            next(e)
        }
    }
}

export default TypeController
