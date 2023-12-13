const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
const {User} = require('./User');

class Trip extends Model{}

Trip.init(
    {
        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trip_flight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        trip_activities: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        trip_hotel: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
)

Trip.belongsTo(User, {foreignKey: 'user_id'});

module.exports = Trip;