# API DOCUMENTATION 

Create an .env file with the following constants, where:
   - PORT : is the port where you go to run your server.
   - DB : is the URI of the mongo database.
   - JWT_SECRET : is the secret key used for JWT
   - SECRET: is the session secret
   - secretGoogle: is the pass complemention
   - CLOUDINARY_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
   - GMAIL_USER
   - GMAIL_PASS
Install the dependencies with npm i
Run the server with npm run dev (development) or npm start (production)

## API Reference

### Users

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all users | http://localhost:PORT/api/users |  headers: {token} |
| GET | get user by id | http://localhost:PORT/api/users/:id | params : { id }, headers: {token} |
| POST |  Register user   | http://localhost:PORT/api/users |  body : accept all User Schema |
| POST |  Login user   | http://localhost:PORT/api/users/login |  body : { email, password } |
| POST |  Login with google   | http://localhost:PORT/api/users/loginGoogle |  body : { user: { name, email, image }} |
| PUT | upgrade user by id |  http://localhost:PORT/api/users/:id | params : { id }, body : accept all User Schema, headers: {token} |
| PUT | Add favorite |  http://localhost:PORT/api/users/favorites/:id | params : { id }, body: { trip id }, headers: {token} |
| DELETE | delete user by id | http://localhost:PORT/api/users/:id | params: { id }; headers: {token} |
| GET | logout | http://localhost:PORT/api/users/logout/:id | params: { id }; headers: {token} |


### User schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| first_name | string | true |
| last_name | string | true |
| email | string | true |
| password | string | true |
| country | string | true |
| comments | array[ObjectId] | false |
| trips | array[ObjectId] | false |
| favorites | array[ObjectId] | false |
| avatar | string | false |
| role | string | false |
| status | string | false |

### Email

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| POST | send email | http://localhost:PORT/api/pass-recover |  body : { email, username } |
| GET | get token | http://localhost:PORT/api/pass-recover/:token |  params: { token } |

### City

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all cities | http://localhost:PORT/api/city |  filter: query{} |
| GET | get city by id | http://localhost:PORT/api/city/:id |  params : { id } |
| POST |  Register city   | http://localhost:PORT/api/city |  body : accept all city Schema |
| PUT | upgrade city by id |  http://localhost:PORT/api/city/:id | params : { id }, body : accept all city Schema, headers: {token} |
| DELETE | delete city by id | http://localhost:PORT/api/city/:id | params: { id }; headers: {token} |

### City schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| Name | string | true |
| location | string | true |
| Country | string | true |
| Image | string | false |
| places | array[ObjectId] | false |

### PLaces

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all places | http://localhost:PORT/api/places |  filter: query{} |
| GET | get place by id | http://localhost:PORT/api/places/:id |  params : { id } |
| POST |  Register place   | http://localhost:PORT/api/places |  body : accept all place Schema |
| PUT | upgrade place by id |  http://localhost:PORT/api/places/:id | params : { id }, body : accept all place Schema, headers: {token} |
| DELETE | delete place by id | http://localhost:PORT/api/places/:id | params: { id }; headers: {token} |

### Place schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| Name | string | true |
| city | array[ObjectId] | true |
| Image | string | false |
| trips | array[ObjectId] | false |
| stars | array[{rating, uid}] | false |

### Comments

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all comments | http://localhost:PORT/api/comments |  filter: query{} |
| GET | get all comments by user | http://localhost:PORT/api/comment/:id |  params : { id } |
| GET | get comment by id | http://localhost:PORT/api/comment |  headers: {token} |
| POST |  create comment   | http://localhost:PORT/api/comment |  body : accept all Comment Schema |
| PUT | upgrade comment by id |  http://localhost:PORT/api/comment/:id | params : { id }, body : text, headers: {token} |
| DELETE | delete comment by id | http://localhost:PORT/api/comment/:id | params: { id }; headers: {token} |

### Comment schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| userId | ObjectId | true |
| text | string | true |
| date | string | false |
| tripId | ObjectId | true |
| image | string | false |
| stars | number | true |

### Trip

| Type | Details | Route     | Description                |
| :-------- |:-------- | :------- | :------------------------- |
| GET | get all trips | http://localhost:PORT/api/trip |  filter: query{} |
| GET | get trip by id | http://localhost:PORT/api/trip/:id | params : { id }  |
| POST |  Register trip   | http://localhost:PORT/api/trip |  body : accept all trip Schema |
| PUT | upgrade trip by id |  http://localhost:PORT/api/trip/:id | params : { id }, body : accept all trip Schema, headers: {token} |
| DELETE | delete trip by id | http://localhost:PORT/api/trip/:id | params: { id }; headers: {token} |

### Trip schema

| Key | Type |  Required |
| :-------- | :------- | :------------------------- |
| userId | ObjectId | true |
| commentsId | array[ObjectId] | false |
| date | string | true |
| placeId | ObjectId | true |
| description | string | true |
| photo | string | false |
| activity | string | true |
| stars | number | true |

## Backend developers

- [@Tomas Rave](https://github.com/TomyReiv)
