const sequelize = require('../config/connections');
const { User, Trip } = require('../models');
const userData = require('./userData.json');
const tripData = require('./tripData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.create(userData);
    for (const trip of tripData) {
        await Trip.create({
            ...trip,
            user_id: users.id,
        });
    }
    process.exit(0);
};
seedDatabase();