const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./User.js');

class Activity extends Model{}

Activity.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
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
        modelName: 'activity',
    }
);

module.exports = Activity;