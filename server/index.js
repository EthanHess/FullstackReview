const express = require('express'); 
const bodyParser = require('body-parser'); 
const massive = require('massive'); 
const couchesController = require('./couchesController'); 
const userController = require('./userController'); 
const authController = require('./authController'); 
const session = require('express-session'); 
require('dotenv').config(); 

const app = express(); 
app.use(bodyParser.json()); 
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database); 
}).catch(error => {
    console.log('MASSIVE error connecting to database', error); 
}); 

app.post('/api/logout', authController.logout); 

//Networking
app.get('api/couches', couchesController.getCouches); 
app.post('/api/couches', couchesController.postCouch); 
app.get('/auth/callback', authController.handleCallback); 

app.get('/api/me', userController.getUserData); 

//Listen
const PORT = 4000; 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🚀`); 
})