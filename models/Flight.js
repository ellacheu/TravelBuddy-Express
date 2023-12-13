const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
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
        airline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departing_from: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_round_trip: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
                isDecimal: true,
            },
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