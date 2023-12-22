const router = require('express').Router();
const { Flight } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newFlightData = await Flight.create({
            ...req.body,
            id: req.session.user_id
        });

        res.status(200).json(newFlightData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:flight_id", async (req, res) => {
    try {
        const flightId = req.params.flight_id;

        const flightData = await Flight.findByPk(flightId);

        if(!flightData) {
            return res.status(404).json({message: 'Flight not found'});
        }

        res.render('triplayout', {flight: flightData.get({plain: true})});
        res.status(200).json(flightData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;