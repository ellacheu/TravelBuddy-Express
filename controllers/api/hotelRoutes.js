const router = require('express').Router();
const { Hotel } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newHotelData = await Hotel.create({
            ...req.body,
            id: req.session.user_id
        });

        res.status(200).json(newHotelData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:hotel_id", async (req, res) => {
    try {
        const hotelId = req.params.hotel_id;

        const hotelData = await Hotel.findByPk(hotelId);

        if(!hotelData) {
            return res.status(404).json({message: 'Hotel not found'});
        }

        res.render('triplayout', {hotel: hotelData.get({plain: true})});
        res.status(200).json(hotelData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;