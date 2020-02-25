const Sequelize = require('sequelize')

class Partner extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
            partnerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            partnerName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            details: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: 'Partner',
            timestamps: false,
            sequelize
        }
        );
    }

    static associate(models){
        this.association = this.hasMany(models.Payment, {foreignKey: 'partnerId', sourceKey: 'partnerId'})
    }
}

module.exports = Partner