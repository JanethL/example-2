# Proposal
Requirements for the weekend

`1` An application name / concept 

`2` A repo for your project 2 (built from express_auth template)

`3` Wireframe for your app - (Lucidchart)

`4` An ERD with two models (minimum) > User + 1 Resource (one to many) - (Lucidchart)

`5` Create (3-5) User Stories for the base user experience - ( [Reference](https://revelry.co/resources/development/user-stories-that-dont-suck/) )


Project #2

- Food Truck Owner Logs into website
- When an order is fullfilled inputs order ticket number 
- When order is found with customer name and number, user presses button
- Button sends SMS to customer alerting them that their order is complete
- Customer reads text on their phone and approaches FoodTruck Owner to pick order up

User Story: 

- As a user, I want to go to a homepage to see a list of all customers who have placed an order
- As a user, I want to select a customer when the order is fulfilled
- As a user, I want to send an sms text to that user


-Technologies
	-Utils SMS API on Autocode
	-Square Orders API
	-Database


`6` Resource's Restful Routing table ( [Readme](https://romebell.gitbook.io/sei-412/node-express/00readme-1/01intro-to-express/00readme#restful-routing) )

`7` Find API and test to see if you can get data ( *be able to print data in the console using Axios, Node-Fetch, and/or Postman* )


Monday May 18th

- [x] Reviewed routes and views
	- [x][Watch Get and Post lesson recordings](https://generalassembly.zoom.us/rec/share/HxsuoXwcCiajYiiYy6FYczzQ69Ep1hK6PNrirP-qcLTk3Y8iG5B0-5H5BC4pVOxx.qyYNdtlLEQI6IQuf?startTime=1620393980000)

 	- [x][Watch Put and Delete](https://generalassembly.zoom.us/rec/share/HxsuoXwcCiajYiiYy6FYczzQ69Ep1hK6PNrirP-qcLTk3Y8iG5B0-5H5BC4pVOxx.qyYNdtlLEQI6IQuf?startTime=1620399153000)

	- [x][Complete and Review Express-project-organizer](https://git.generalassemb.ly/SEI-412/express-project-organizer-solution

	- [x] Watch recording of Fri May 14 on additional route building on express auth(express example-app)

	- [x][Complete and Review Prehistoric Features Lab (Friday May 7)](https://git.generalassemb.ly/SEI-412/prehistoric_creatures)
	- [x][Complete Express with APIS - OMDB Part 1 + 2](https://romebell.gitbook.io/sei-412/node-express/sequelize/04usingmodels )

- [x] Set up auth   


Tuesday May 18
- [x]Buid out ERD models,
    - [Lucid Chart](https://lucid.app/lucidchart/f3b2661b-c5f0-4e13-aaf4-f356dbe95925/edit?page=0_0#) 

- [ ]Associations and routes  

- [ ]Make a request to Squares API
- [[x]Added models and associations
- [x]Installed lib.cli tools for SMS message 
sequelize model:create --name customer --attributes name:string,imdbid:string
sequelize db:migrate 
- [x]Made a request to lib.utils.sms API

- [x]Ressearch Squares API
	-Make a request to Orders API to find Customer ID (https://developer.squareup.com/explorer/square/orders-api/search-orders) 

- [x] Blockers 
Oauth [https://developer.squareup.com/apps/sq0idp-H12-XNE8ZzC5s7IuIV54gg/oauth]
Before your application can access a Square merchant's data, the merchant needs to give your application 		 permission. 	The Square API uses the OAuth 2.0 protocol for this purpose. This is the same method that services like Twitter and 	Facebook use to let applications post on your behalf. 
Use Connect API webhooks to notify your application when certain payment, inventory, or timecard events occur. Notifications are typically sent within sixty seconds of the associated event.
- [x] I have decided not to use Square’s API because of the many blockers

Wednesday May 19th
- [x]Create async function to send sms to customers when a button is pressed
- [x] Create a main directory under views with 404.ejs and index.ejs 
	- index.ejs will print out all the customers
	- 404.ejs will pull GIFs from API
- [x] Create a /GET route to display customers ONLY if the user is logged in using `const isLoggedIn = require('./middleware/isLoggedIn’); 	& where `({where:{userId: req.user.id}})`
	-otherwise customer data will print even if user isn’t logged in
- [x] inside`index.js` of  view/main directory  add a section to filter through customers by ticket number.
- [x] Add button to message customers when order is ready in  views/index.js 
- [x] Add button to send customers to a different page in  views/index.js a



Thursday May 20th 
- [x] 6 - 8 am - Pokedex review
- [x] Create a POST route to create new customers inside controllers folder
- [x] Create a view for the template form to create a new customer
- [x] Create GET route to display form for creating a new customer
- [x] Create a route to filter by specific customer ticket
- [x] Create a view to show the customers with that ticket view/customers/show.ejs
- [x] Create a POST route to send SMS message when button is clicked



Friday May 21 
- [x] Deploy MVP to Heroku
- [x] Add .forEach method to views/customers/show to print out every customer with a specific ticket number when filtered
- [x] Add route for Order Complete button
	- 12:41 Post route when Order Complete button is clicked 
	- View template for fullfilled Customers
[ ]Delete the orders table (No need for it) 
-[x] Add an attribute to customer table (add column)
	- sequelize migration:create --name customer_add_unfullfilled_column
- [x] Modify customers model - add an unfullfilled field set to true by default,
	- whenever fullfilled button is hit it finds order and changes boolean to f
- [x] Change //GET to display customers info only if they have `true` for unfullfilled order
- [x] Add PUT Route for when fullfilled button is clicked `unfullfilled` column` will change to false 
- [x] Create a view for fullilled orders 
- [x]Create a partials header to display Current customers, fullfilled customers, profile, logout 
- [X]Change header to block
- [ ] Update the message to include Yelp review CTA
- [ ] Create Delete button
- [ ] Create a EDIT 
- [ ] Create a way to view and respond/log messages 


- [ ] Styling 
- [ ]Bootstrap CSS
- [x] Build out Navigation Bar with Logo
- [x] Log out Page 
	- Style sign up form 
	- Style Login form

[ ] Color theme: 
	-Blue
	-White 
	-Gray 

Future Plans
- [ ] Update the message to include Yelp review CTA
- [ ] Create Delete button
- [ ] Create a EDIT 
- [ ] Create a way to view and respond/log messages 