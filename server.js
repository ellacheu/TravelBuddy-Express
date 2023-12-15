const path = require('path');
const express = require('express');
const sessions = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

//const sequelize = require('./config/connections');
//const SequelizeStore = require('connect-session-sequelize');

const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Issa secret',
//     cookie: {
//       maxAge: 300000,
//       httpOnly: true,
//       secure: false,
//       sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

//   app.use(session(sess));

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(routes);

  //sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  //});