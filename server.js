require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override');
const fs = require("fs");
const db = require('./models');

const SECRET_SESSION = process.env.SECRET_SESSION;


app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));


app.use(session({
  secret: SECRET_SESSION,
  resave:false,
  saveUninitialized: true
}));

app.use(flash());

//middleware 
app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

//GET / -display customers and their info //main index of site
//this GET route stays in server 
app.get('/', isLoggedIn, (req, res) => { //make sure to add const isLoggedIn = require('./middleware/isLoggedIn');
  db.customer.findAll({
    where:{userId: req.user.id},
    where:{unfullfilled: true}
  })
  .then((customers) => {
    res.render('main/index', {customers:customers})
  }).catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
  }) 

//Post 
// bring in customers  controllers
app.use('/auth', require('./controllers/auth'));
app.use('/customers', require('./controllers/customers'))


app.get('/profile', isLoggedIn, (req, res) => {  //make sure to add const isLoggedIn = require('./middleware/isLoggedIn');
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

const PORT = process.env.PORT || 9001;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
