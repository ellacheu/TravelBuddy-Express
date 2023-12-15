const router = require('express').Router();
const {User, Trip, Hotel, Flight, Activity} = require('../models');
const { route } = require('./api');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        console.log(req);
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }

    res.render('homepage');
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;