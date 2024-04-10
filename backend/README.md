# API DOCUMENTATION 

Create an .env file with the following constants, where:
   - PORT : is the port where you go to run your server.
   - DB : is the URI of the mongo database.
   - JWT_SECRET : is the secret key used for JWT
   - SECRET: is the session secret
   - secretGoogle: is the pass complemention
Install the dependencies with npm i
Run the server with npm run dev (development) or npm start (production)

## API Reference

### Users


| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all users | http://localhost:PORT/api/users/:id |  headers: {token} |
| GET | get user by id | http://localhost:PORT/api/users |  headers: {token} |
| POST |  Register user   | http://localhost:PORT/api/users |  body : accept all User Schema |
| POST |  Login user   | http://localhost:PORT/api/users/login |  body : { email, password } |
| POST |  Login with google   | http://localhost:PORT/api/users/loginGoogle |  body : { credential } |
| PUT | upgrade user by id |  http://localhost:PORT/api/users/:id | params : { id }, body : accept all User Schema, headers: {token} |
| DELETE | delete user by id | http://localhost:PORT/api/users/:id | params: { id }; headers: {token} |

### Users schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| first_name | string | true |
| last_name | string | true |
| email | string | true |
| password | string | true |
| country | string | true |
| comments | array[string] | false |
| trips | array[string] | false |
| role | string | false |

### Comments


| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all comments | http://localhost:PORT/api/comments |  headers: {token} |
| GET | get all comments by user | http://localhost:PORT/api/comment/:id |  headers: {token} |
| GET | get comment by id | http://localhost:PORT/api/comment |  headers: {token} |
| POST |  create comment   | http://localhost:PORT/api/comment |  body : accept all Comment Schema |
| PUT | upgrade comment by id |  http://localhost:PORT/api/comment/:id | params : { id }, body : text, headers: {token} |
| DELETE | delete comment by id | http://localhost:PORT/api/comment/:id | params: { id }; headers: {token} |

### Comment schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| userId | string | true |
| text | string | true |
| respondsId | array[string] | false |
| date | date | true |
| placeId | string | true |


## Backend developers

- [@Tomas Rave](https://github.com/TomyReiv)
