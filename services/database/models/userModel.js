const Sequelize = require('sequelize')

class User extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            tableName: 'User',
            timestamps: false,
            sequelize
        }
        )
    }

    static associate(models){
        this.ConsumptionAssociation =  this.hasMany(models.Consumption)
        this.PaymentAssociation =  this.hasMany(models.Payment)
    }
}

module.exports = User