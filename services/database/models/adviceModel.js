const Sequelize = require('sequelize') 

class Advice extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init(
            {
                adviceId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                content: {
                    type: DataTypes.TEXT,
                    allowNull: false
                }
            },
            {
                tableName: 'Advice',
                timestamps: false,
                sequelize
            }

        );
    }

    static associate(models){
        this.association = this.belongsToMany(models.Theme, {through: 'AdviceTheme'});
    }

    // can also add queries and other methods
}

module.exports = Advice
