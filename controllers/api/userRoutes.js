const router = require('express').Router();
const { User, Trip } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await User.findByPk({
            where: { id: userId },
            include: [{model: Trip}]
        });
        if(!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(userData);
    } catch (err){
        console.error(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if(!userData) {
            res.status(400).json ({ message: 'Incorrect email/password'});
        return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json ({ message: 'Incorrect email/password'});
        return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Login successful!'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});
  
module.exports = router;