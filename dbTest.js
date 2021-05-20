var db = require("./models");
require('dotenv').config();
function addNewUser() {
  db.user
    .create({
      name: "zak",
      email: "zak.graziani@gmail.com",
      password: "Lakers92!",
    })
    .then((newUser) => {
      console.log(newUser.get());
    });
}
// addNewUser()
// function addNewCustomer(){
//     //create new customer > add to db> print
//     //*
//     db.customer.create({
//         name: 'Janeth',
//         email: 'ledezmajane@gmail.com',
//         phone: '510-943-8411',
//         userID: '1'
//     })
//     .then(newCustomer =>{
//         console.log(newCustomer);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

function addNewCustomer() {
  db.user
    .findOne({
      where: {
        name: "Janeth Ledezma",
      },
    })
    .then((user) => {
      console.log(user.get());
      //use the createCustomer method(b/c) of association made before migration
      user
        .createCustomer({
          ticket: "1",
          firstName: "Zak",
          lastName: "Graziani",
          email: "zak.graziani@gmail.com",
          phone: "5109438411",
        //   userId: "1",
          messageCount: "0",
        })
        .then((newCustomer) => {
          console.log(newCustomer);
        })
        .catch((err) => {
          console.log(err);
        });
    });
}
   addNewCustomer();

//add new order

const createCustomerOrder = () => {
  db.customer
    .findOne({
      where: {
        ticket: "1",
      },
    })
    .then((customer) => {
      customer
        .createOrder({
          item: "Quesataco Combo",
          total: 12,
        })
        .then((newOrder) => {
          console.log(newOrder);
        });
    });
};

// createCustomerOrder();

const token = process.env.TOKEN;

console.log(token)

async function sendSMS(phone, message){
    const lib = require('lib')({token: token});
    // make API request
    let result = await lib.utils.sms['@2.0.2']({
      to: phone,
      body: message
    });
    console.log(result)
}
//  sendSMS('17607086839', 'Your order is ready.') //When a button is pressed send SMS 

 //have function in a utils folder 
 //import function into controllers
 //pass in variables 
//create
//get 
//delete 