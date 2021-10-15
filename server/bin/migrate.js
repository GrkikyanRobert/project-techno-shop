import * as Models from '../models';

async function main() {
    const models = [
        Models.User,
        Models.BasketAdmin,
        Models.Type,
        Models.Basket,
        Models.Brand,
        Models.Device,
        Models.Rating,
        Models.TypeBrand,
        Models.DeviceInfo,

    ];
    for (const i in models) {
        console.log('--->', i);
          await models[i].sync({ alter: true });
        // await models[i].sync({ alter: true,force: false });
    }
    process.exit();
}

main().catch(e=>console.log(e));
// await sequelize.sync({ alter: false, force: false });
