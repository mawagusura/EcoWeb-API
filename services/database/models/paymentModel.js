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
        this.UserAssociation = this.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'userId'})
        this.PartnerAssociation = this.belongsTo(models.Partner, {foreignKey: 'partnerId', targetKey: 'partnerId'})
    }
}

module.exports = Payment