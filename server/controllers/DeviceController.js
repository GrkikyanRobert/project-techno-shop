import { literal} from "sequelize";
import Promise from 'bluebird';

const uuid = require('uuid')

import {Basket,  Device, DeviceInfo, BasketAdmin, Rating,} from "../models/index";
import fs from "fs";
import HttpError from "http-errors";


 class  DeviceController {
    static create = async (req, res, next) => {
        try {
            const {name, price, brandId, typeId, info,} = req.body;
            const img = req.file;

            if (!name || !price || !brandId || !typeId) {
                throw HttpError(403, {errors: `ошибка -  Заполните все поля  или  дублокация названия`});
            }

            const device = await Device.create({
                name, price, brandId, typeId,
            })


            const fileTypes = {
                'image/jpeg': '.jpg',
                'image/png': '.png',
                'image/gif': '.gif',
            };

            const imageDir = `public/images/${device.id}/`;
            if (!fs.existsSync(imageDir)) {
                fs.mkdirSync(imageDir, {recursive: true});
            }
            const imageFileName = `${global.serverUrl}/images/${device.id}/${img.fieldname}-${Date.now()}${fileTypes[img.mimetype]}`;
            const avatar = `${img.fieldname}-${Date.now()}${fileTypes[img.mimetype]}`;
            fs.writeFileSync(imageDir + avatar, img.buffer);
            device.img = imageFileName;
            await device.save();


            if (info) {

                JSON.parse(info).forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )

            }

            await Basket.create({ItmDeviceId: device.id})


            res.json({
                status: "ok",
                device
            })

        } catch (e) {
            next(e)
        }
    }
    static getAll = async (req, res, next) => {
        try {
            let {brandId, typeId, limit, page} = req.query

            page = page || 1
            limit = Math.min(limit || 7, 100);
            let offset = page * limit - limit

            let devices;
            if (!brandId && !typeId) {
                devices = await Device.findAndCountAll({
                    limit: +limit,
                    offset
                })
            }
            if (brandId && !typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        brandId
                    },
                    limit, offset
                })
            }
            if (!brandId && typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        typeId
                    },
                    limit, offset
                })
            }
            if (brandId && typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        brandId,
                        typeId,
                    },
                    limit, offset
                })
            }


            res.json({
                status: "ok",
                devices,
                offset,
                page,
                limit,

            })
        } catch (e) {
            next(e)
        }
    }


    static getOne = async (req, res, next) => {
        try {
            const {id} = req.query;
            const device = await Device.findOne({
                where: {id},
                include: [{
                    model: DeviceInfo,
                    as: 'info',
                    required: false
                }]
            })

            res.json({
                device
            })
        } catch (e) {
            next(e)
        }
    }

    static personDelete = async (req, res, next) => {
        try {
            const {id} = req.body;
            await Device.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                status: 'ok',

            });
        } catch (e) {
            next(e)
        }
    }


    static basketCreate = async (req, res, next) => {
        try {
            const {count, praductId, userId, phone} = req.body;
            const BasketCreate = await Basket.create({
                count, praductId, userId, phone
            })

            res.json({
                BasketCreate
            })
        } catch (e) {
            next(e)
        }
    }

    static basketAll = async (req, res, next) => {
        try {
            const BasketAll = await Basket.findAll()

            res.json({
                BasketAll
            })
        } catch (e) {
            next(e)
        }
    }


    static basketAdmin = async (req, res, next) => {
        try {
            const BasketAll = await Basket.findAll(
                {
                    row: true
                }
            )

            await Promise.map(BasketAll, async (i) => {
                await BasketAdmin.create({
                    ...i,
                    id: undefined,
                    count: i.count,
                    userId: i.userId,
                    praductId: i.praductId,
                    phone: i.phone,


                })
            })



            await Basket.destroy({
                where: {}
            })
            res.json({
                statuss: "ok",

            })
        } catch (e) {
            next(e)
        }
    }


    static basketAdminGet = async (req, res, next) => {

        try {
            const basketAdmin = await BasketAdmin.findAll()
            res.json({
                basketAdmin,
                status: "ok"
            })
        } catch (e) {
            next(e)
        }
    }


    static CreateRateDevice = async (req, res, next) => {

        try {
            const {userId, deviceId} = req.body

            const rate = await Rating.create({
                userId, deviceId
            })

            res.json({
                rate,
                status: "ok"
            })
        } catch (e) {
            next(e)
        }
    }
    static CreateRateDeviceAll = async (req, res, next) => {

        try {


            const rateAll = await Rating.findAll()

            res.json({
                rateAll,
                status: "ok"
            })
        } catch (e) {
            next(e)
        }
    }






    static UpdateRateDevice = async (req, res, next) => {


        try {
            const {id} = req.body





            await Device.update({
                rating: literal(`rating + 1`)
            }, {
                where: {
                    id
                }
            })
            res.json({
                status: "ok",

            })
        } catch (e) {
            next(e)
        }
    }


}


export default DeviceController


