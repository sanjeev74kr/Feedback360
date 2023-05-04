# Restaurant_Review_App
This is a web application that includes a CRUD API for displaying a list of restaurants and their reviews. Also users can add their own ratings and reviews.

Technologies Used->

The project was developed using the following technologies:

Node.js

Express.js

Mongoose

Typescript

* Steps to run:->

To run this project, follow the steps below:

1. Clone the repository:

https://github.com/sanjeev74kr/Restaurant_Review_App.git

2.  Install dependencies:

cd Restaurant-Review-App

npm install

3. Configure the environment variables:

Create a .env file in the root directory of the project and set the following environment variables:

MONGODB_URI=

PORT=

of Type- 

interface ProcessEnv{

MONGODB_URI:string,

PORT:number

}

4. Run - npm start

The server should now be running on http://localhost:Your given PORT.

* API Endpoints
* 

| HTTP Verb | API Endpoint | Brief Description |
| --- | --- | --- | 
| GET | /restaurants | Get a list of all restaurants |
| GET | /restaurants/:_id | Get the details of a single restaurant, including all reviews |
| POST | /restaurants/:_id/review | Submit a review for a restaurant |
| POST | /restaurants/post | Save a new restaurant |
| GET | /admin/analytics | Get analytics of all restaurants |


* Input required

* For saving restaurant

| Attribute | Data Type |
| --- | --- |
| id | ObjectId |
| name | string |
| address | string |
| description | string |

* for review

| Attribute | Data Type |
| --- | --- |
| id | ObjectId |
| restaurantId | ObjectId |
| reviewText | string |
