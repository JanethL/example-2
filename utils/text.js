const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
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
 sendSMS(req.params.number, 'Your order is ready.') //When a button is pressed send SMS 


module.exports = router
