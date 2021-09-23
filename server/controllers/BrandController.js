import {Brand, User} from "../models/index"
import HttpError from "http-errors";

class BrandController {
    static  create = async (req, res, next) => {
        try {
            const {name} = req.body

            const x = await Brand.findOne({
                where: {
                    name
                }
            })
            if (x) {
                throw HttpError(403, { errors :'Бренд с таким именём уже существует !'});
            }

            const brand = await Brand.create({name})
            res.json({
                brand
            })
        } catch (e) {
            next(e)
        }
    }

    static  getAll = async (req, res, next) => {
        try {
            const brend = await Brand.findAll()
            res.json({
                status: "ok",
                brend
            })
        } catch (e) {
            next(e)

        }
    }
}

export default BrandController
