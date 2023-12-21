const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections.js');
const User = require('./User');

class Hotel extends Model{}

Hotel.init (
    {
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        checkIn_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        checkIn_time: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        checkOut_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        checkOut_time: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'hotel',
    }
);

module.exports = Hotel;