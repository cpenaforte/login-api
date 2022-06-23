# Login API

This server was built using Node.Js with koa, boom, JWT, sequelize, sqlite3 and fastest-validator libs. It's intended to be a login authentication system and sign up system.

## Execution
 1. Clone this repository
 2. Open the terminal and go to the repository directory
 3. Enter this commands:

        npm install
        npm start


## Features:
### Auth
 It's set on the url http://localhost:8080/v1/api/auth
 It works with a POST method, receiving a JSON containing email and passaword. Finally, it output user's id and email and the JWT token.

### Sign Up:
 It's set on the url http://localhost:8080/v1/api/user
 It works with a POST method, receiving a JSON containing first name, last name, email and passaword. Finally, it output all user information.

## Requirements
 - Node.Js
 - NPM 

### Credits:

This repository is owned by Carlos Daniel Penaforte de Souza.