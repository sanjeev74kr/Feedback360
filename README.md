# Feedback360
This project aims to provide feedback and information to users about nearby shops, hospitals,

schools, and more.

It includes CRUD APIs for displaying a list of establishments and their reviews. 

Also, users can add their own ratings and reviews and admin can view the analytics.

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

    cd Feedback360

    npm install

3. Configure the environment variables:

Create a .env file in the root directory of the project and set the following environment variables:

MONGODB_URI=

PORT=
 
* Type

MONGODB_URI: string,

PORT: number



4. Run - npm start

   The server should now be running on http://localhost: Your given PORT.

* API Endpoints

| HTTP Verb | API Endpoint | Brief Description |
| --- | --- | --- | 
| GET | /business | Get a list of all businesses |
| GET | /business/:_id | Get the details of a single business, including all reviews |
| POST | /business/:_id/feedback | Submit a review with rating for a restaurant |
| POST | /business/save | Save a new business |
| GET | /admin/analytics | Get analytics of all available businesses for admin |



* businesses collection fields

| Attribute | Data Type |
| --- | --- |
| _id | ObjectId |
| name | string |
| description | string |
| location | string |
| category | string |

* feedbacks collection fields

| Attribute | Data Type |
| --- | --- |
| _id | ObjectId |
| businessId | ObjectId |
| ratings | number |
| reviews | string |
