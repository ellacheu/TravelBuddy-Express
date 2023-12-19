const router = require('express').Router();
const activityRoutes = require('./activityRoutes');
const flightRoutes = require('./flightRoutes');
const hotelRoutes = require('./hotelRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');

// router.use('/activities', activityRoutes);
// router.use('/flights', flightRoutes);
// router.use('/hotels', hotelRoutes);
router.use('/trips', tripRoutes);
router.use('/user', userRoutes);

module.exports = router;