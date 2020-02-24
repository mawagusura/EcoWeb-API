const Sequelize = require('sequelize');

// Parametrage base
const DbUrl = process.env.DATABASE_URL || "postgres://evcqrrppzojdwv:bb777d758d6811e5da969956d838a00bb14a3a3d1b7e85ca0dba7164355700c4@ec2-54-195-247-108.eu-west-1.compute.amazonaws.com:5432/dl4otq6979gl5?ssl=true"
const sequelize = new Sequelize(DbUrl);

//import models
const AdviceModel = require('./models/adviceModel')
const ThemeModel = require('./models/themeModel')
const ConsumptionModel = require('./models/consumptionModel')
const PartnerModel = require('./models/partnerModel')
const PaymentModel = require('./models/paymentModel')
const UserModel = require('./models/userModel')

const models = {
    Advice: AdviceModel.init(sequelize, Sequelize),
    Theme: ThemeModel.init(sequelize, Sequelize),
    Consumption: ConsumptionModel.init(sequelize, Sequelize),
    Partner: PartnerModel.init(sequelize, Sequelize),
    Payment: PaymentModel.init(sequelize, Sequelize),
    User: UserModel.init(sequelize, Sequelize)
}

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));



// Persiste les changements en base
// A décommenter pour modifier le schéma de base de donnée
// ATTENTION : cela supprime les tables et donc les données
sequelize.sync({force: true})

require('init/userInit.js')


const db = {
  ...models,
  sequelize
};



module.exports = db


