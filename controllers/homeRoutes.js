const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
        try {
            console.log(req);

            res.render('homepage');
        } catch(err) {
            console.error(err);
            res.status(500).json(err);
        } 
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;