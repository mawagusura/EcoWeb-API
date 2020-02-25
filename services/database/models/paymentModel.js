const Sequelize = require('sequelize')

class Payment extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
            partnerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Partner',
                    key: 'partnerId'
                }
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'userId'
                }
            },
            amount: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            paymentDate: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            tableName: 'Payment',
            timestamps: false,
            sequelize
        }
        )
    }

    static associate(models){
        this.association = this.belongsTo(models.User)
    }
}

module.exports = Payment