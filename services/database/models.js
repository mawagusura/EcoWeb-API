var sequelize = require('./connection.js').sequelize
var DataTypes = require('sequelize').DataTypes
var exports = module.exports = {}

exports.Payer = sequelize.define('payer', {
    idpartenaire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'partenaires',
            key: 'idpartenaire'
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
    montant: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    datepaiement: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    tableName: 'payer',
    timestamps: false
});

exports.Consommation = sequelize.define('consommation', {
    idconsommation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    consommationmoment: {
        type: DataTypes.DATE,
        allowNull: false
    },
    consommation: {
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
    tableName: 'consommation',
    timestamps: false
});

exports.Partenaire = sequelize.define('partenaires', {
    idpartenaire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nompartenaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'partenaires',
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
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
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
