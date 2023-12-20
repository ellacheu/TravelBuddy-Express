const User = require('./User.js')
const Trip = require('./Trip.js')
const Hotel = require('./Hotel.js')
const Flight = require('./Flight.js')
const Activity = require('./Activity.js')


User.hasMany(Trip, {
    foreignKey: 'id',
});

Trip.belongsTo(User, {
    foreignKey: 'id'
});

Trip.hasMany(Hotel, {
    foreignKey: 'trip_id'
});

Trip.hasMany(Flight, {
    foreignKey: 'flight_id'
});

Trip.hasMany(Activity, {
    foreignKey: 'activity_id'
});

Activity.belongsTo(Trip, {
    foreignKey: 'trip_id'
});

Flight.belongsTo(Trip, {
    foreignKey: 'trip_id'
});

Hotel.belongsTo(Trip, {
    foreignKey: 'trip_id'
});

module.exports = {
    User,
    Trip,
    Hotel,
    Flight,
    Activity
};