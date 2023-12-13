const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
const {User} = require('./User');

class Hotel extends Model{}

Hotel.init (
    {
        hotel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        hotel_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hotel_address: {
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
    }

)