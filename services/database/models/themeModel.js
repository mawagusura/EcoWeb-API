const Sequelize = require('sequelize')

class Theme extends Sequelize.Model {
    static init(sequelize, DataTypes){
        return super.init({
            themeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            themeColor: {
                type: DataTypes.STRING,
                allowNull: false
            },
            themeName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            tableName: 'Theme',
            timestamps: false,
            sequelize
        }
        );
    }

    
    static associate(models){
        this.association = this.belongsToMany(models.Advice, {through: 'AdviceTheme'});
    }
}

module.exports = Theme