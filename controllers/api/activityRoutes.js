const router = require('express').Router();
const { Activity } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newActivityData = await Activity.create({
            ...req.body,
            id: req.session.user_id
        });

        res.status(200).json(newActivityData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:activity_id", async (req, res) => {
    try {
        const activityId = req.params.activity_id;

        const activityData = await Activity.findByPk(activityId);

        if(!activityData) {
            return res.status(404).json({message: 'Activity not found'});
        }

        res.render('triplayout', {activity: activityData.get({plain: true})});
        res.status(200).json(activityData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;