const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombres: {
        type: Sequelize.TEXT
    },
    apellidos: {
        type: Sequelize.TEXT
    },
    correo: {
        type: Sequelize.TEXT
    },
    celular: {
        type: Sequelize.TEXT
    },
    empresa: {
        type: Sequelize.TEXT
    },
    genero: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
})

module.exports = User
