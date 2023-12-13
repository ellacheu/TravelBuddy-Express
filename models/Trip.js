const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./User');

class Trip extends Model{}

Trip.init(
    {
        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hotel: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'trip',
    }
);

module.exports = Trip;