# Full stack auth review 

# Front-end

## Component structure

* Nav bar
* Home aka Landing page
* Login page
* Profile page
* Couch browser
* Add couch
* Footer? 
* Cart? 

## Redux

* store
* reducer
    * reducer function itself
    * initial state
        * user: null
        * couches? 
    * action creators
    * action types (strings/names)
* provider in index.js
* connect() in components

# Routing

* routes themselves
    * / (home)
    * /cool-couches
    * /profile
    * /cart? 
* index.js BrowserRouter
* Links in Navbar
* Routes routes.js

# Back-end

# Endpoints aka routes

* GET, POST /api/couches
* /api/me
* /auth/callback

## Controllers 

* Couches
* Auth
* User

## Server

* index.js

# Database

## Tables

* couches
    * id serial
    * name text
    * price int
    * image text
* users
    * id serial
    * auth0_id text
    * email text
    * name text
    * picture text

## Queries (functions for massive)

* select all couches
* fund user
* create user
* create couch?


# npm packages we'll use

* express
* body-parser
* axios
* massive
* react-router-dom
* react-redux
* redux
* dotenv
* http-proxy-middleware