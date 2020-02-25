const Sequelize = require('sequelize')

class Consumption extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
            consumptionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            consumptionDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            consumptionAmount: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'userId'
                }
            }
        },
        {
            tableName: 'Consumption',
            timestamps: false,
            sequelize
        }      
        );
    }

    static associate(models){
        this.association = this.belongsTo(models.User) 
    }
}

module.exports = Consumption