const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections.js');
const User = require('./User.js');

class Flight extends Model{}

Flight.init(
    {
        flight_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        flight_num: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'flight',
    },
);

module.exports = Flight;