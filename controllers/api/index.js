const router = require('express').Router();
const activitiesRoutes = require('./activitiesRoutes');
const flightRoutes = require('./flightRoutes');
const hotelRoutes = require('./hotelRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');

router.use('/activities', activitiesRoutes);
router.use('/flights', flightRoutes);
router.use('/hotels', hotelRoutes);
router.use('/trips', tripRoutes);
router.use('/user', userRoutes);

module.exports = router;