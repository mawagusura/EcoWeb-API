var sequelize = require('./connection.js').sequelize
var DataTypes = require('sequelize').DataTypes
var exports = module.exports = {}

exports.Pay = sequelize.define('pay', {
    idpartner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'partner',
            key: 'idpartner'
        }
    },
    iduser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'iduser'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    payementdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    tableName: 'pay',
    timestamps: false
});

exports.Consumption = sequelize.define('consumption', {
    idconsumption: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    consumptionmoment: {
        type: DataTypes.DATE,
        allowNull: false
    },
    consumption: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    iduser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'iduser'
        }
    }
}, {
    tableName: 'consumption',
    timestamps: false
});

exports.Partner = sequelize.define('partner', {
    idpartner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    partnername: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'partner',
    timestamps: false
});

exports.User = sequelize.define('user', {
    iduser: {
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
}, {
    tableName: 'user',
    timestamps: false
});

exports.Theme = sequelize.define('theme', {
    idtheme: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    themecolor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    themename: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'theme',
    timestamps: false
});

exports.GoodPratice = sequelize.define('goodpratice', {
    idpractice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'goodpratice'
});

exports.Have = sequelize.define('have', {
    idtheme: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'theme',
            key: 'idtheme'
        }
    },
    idpractice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'goodpratice',
            key: 'idpractice'
        }
    }
}, {
    tableName: 'have',
    timestamps: false
});



