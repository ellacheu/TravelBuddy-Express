const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
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
        address: {
            type: DataTypes.STRING,
            allowNull: true,
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
        modelName: 'hotel',
    }
);

module.exports = Hotel;