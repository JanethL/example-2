## THE FOOD TRUCK TEXTING APP 💬 🚚

## A better customer experience 

# User Story: 

- As a user, I want to intake customer information when they place an order 
- As a user, I want to go to a homepage to see a list of all customers who have placed an order
- As a user, I want to select a customer when the order is fulfilled
- As a user, I want to send an sms text to that user
- As a user, I want to clear the list of customers once their order has been fullfilled
- As a user I want to see a history of fullfilled users

# SIGN UP TO TEST

https://text-customers.herokuapp.com/ 


# HOW IT WORKS
The following are the controllers found in `customers.js`
    
```javascript
// controller POST ROUTE - create a new customer
router.post('/', (req, res) => {
    db.customer.create({
        ticket: req.body.ticket,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        messageCount: req.body.messageCount,
        userId: req.user.id,
        unfullfilled: 'true'

    })
    .then((post) => {
        res.redirect('/')
    })
    .catch((error) => {
        res.status(400).render('main/404')
    })
})
```

<br>

```Javascript 
//Get route to grab all customers and display customers/new view 
router.get('/new', (req, res) => {
    db.customer.findAll()
    .then((customers) => {
        res.render('customers/new', { customers: customers})
    })
    .catch((error) => {
        res.status(400).render('main/404')
    })
})

```

When a complete button is selected the phone number to a specific customer is passed through along with the message. 

```Javascript

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
```



When the `complete` button is selected I query the db to find the specific users customers where unfullfilled is false
meaning that their order has been fullfilled.

```javascript 

//GET /fullfilled - display fullfilled customers

  router.get('/fullfilled', (req, res) => {
    let userInfo = req.user.get()
    db.customer.findAll({
        where: { unfullfilled: false, userId: userInfo.id},
      })
      .then((customer) => {
        if (!customer) throw Error()
        console.log(customer.unfullfilled)
        res.render('customers/fullfilled', { customer: customer })
      })
      .catch((error) => {
        console.log(error)
        res.status(400).render('main/404')
      })
    })
```

This is a filter section on the homepage to allow for a user to query using a specific customers ticket. 

```Javascript 


//GET /projects/:ticket - display a specific customer
router.get('/', (req, res) => {
    let userInfo = req.user.get()
    console.log('Here is user info', userInfo)
    let query = req.query.ticketFilter
    console.log('here is query:', query)
    db.customer.findAll({
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
  ```

## Future Plans

- [ ] 
- [ ] Create a EDIT 
- [ ] Create a way to view and respond/log messages 




## Initial Wireframes:
## Scratch Work:

