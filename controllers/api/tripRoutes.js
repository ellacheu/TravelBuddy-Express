const router = require('express').Router();
const { User, Activity, Flight, Hotel, Trip } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newTripData = await Trip.create({
            ...req.body,
            // trip_id: req.session.user_id,
        });

        res.status(200).json(newTripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:name', async (req, res) => {
    try {
        const tripData = await Trip.findOne({ 
            where: { name: req.params.name },
            include: [{ model: Flight }, { model: Hotel }, { model: Activity }]

        });

        if(!tripData) {
            return res.status(404).json({message: 'Trip not found'});
        }

        const trip = tripData.map((trip) => trip.get({ plain: true }));

        res.render('triplayout', trip);
        res.status(200).json(tripData);

    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});





module.exports = router; 