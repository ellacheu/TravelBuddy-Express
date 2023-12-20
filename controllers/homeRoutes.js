const router = require("express").Router();
const { User, Trip } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req);

    res.render("homepage");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

////////////////////////////////////////////
// find all trips
router.get("/trips", async (req, res) => {
  try {
    const tripData = await Trip.findall({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const trips = tripData.map((trips) => trips.get({ plain: true }));

    res.render("triplayout", {
      trips,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// trip by id
router.get("/trips/:id", async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const trips = tripData.get({ plain: true });

    res.render("homepage", {
      ...trips,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/triplayout", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Trip }],
    });

    const user = userData.get({ plain: true });

    res.render("triplayout", {
      ...user,
      logged_in: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/triplayout");
    return;
  }

  res.render("login");
});

module.exports = router;
