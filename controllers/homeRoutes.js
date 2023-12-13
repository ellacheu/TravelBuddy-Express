const router = require('express').Router();
const {User, Trip, Hotel, Flight, Activity} = require('../models');
const { route } = require('./api');

router.get('/', async (req, res) => {
    try {
        console.log(req);
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;