let express = require('express')
let db = require('../models')
let router = express.Router()
require('dotenv').config();


// POST /customers - create a new customer
router.post('/', (req, res) => {
    db.customer.create({
        ticket: req.body.ticket,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        messageCount: req.body.messageCount,
        userId: req.user.id
    })
    .then((post) => {
        res.redirect('/')
    })
    .catch((error) => {
        res.status(400).render('main/404')
    })
})
// GET /customer/new - display form for creating a new customer

router.get('/new', (req, res) => {
    db.customer.findAll()
    .then((customers) => {
        res.render('customers/new', { customers: customers})
    })
    .catch((error) => {
        res.status(400).render('main/404')
    })
})

//GET /projects/:ticket - display a specific customer
router.get('/', (req, res) => {
    let userInfo = req.user.get()
    console.log('Here is user info', userInfo)
    let query = req.query.ticketFilter
    console.log('here is query:', query)
    db.customer.findOne({
      where: { ticket: query, userId: userInfo.id},
    })
    .then((customer) => {
      if (!customer) throw Error()
      console.log(customer.ticket)
      res.render('customers/show', { customer: customer })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).render('main/404')
    })
  })

// POST route when SMS button is clicked

router.post('/sms/:number', (req, res) => {
    async function sendSMS(phone, message){
        const token = process.env.TOKEN;
        const lib = require('lib')({token: token});
        console.log('here is', token)
        // make API request
        let result = await lib.utils.sms['@2.0.2']({
          to: phone,
          body: message
        });
        console.log(result)
    }
     sendSMS(req.params.number, 'Your order is ready.')
})


module.exports = router
