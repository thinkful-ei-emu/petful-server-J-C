# Petful Server

Link to live app 
Link to client repo https://github.com/thinkful-ei-emu/petful-client-J-C/
Link to API repo: https://github.com/thinkful-ei-emu/petful-server-J-C
Name of your pair : Jordon and Colleen

## Summary
This app connects people with pets. People wait in a virtual line, when they reach the front of the line, they are able to adopt a pet or choose to go back to the end of the line.

## Technology Used
Express, Node.js, React.js

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

## Endpoints
GET /api/dog : returns first dog in the list
ex/ {"imageURL":"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg","imageDescription":"A smiling golden-brown golden retreiver listening to music.","name":"Zeus","sex":"Male","age":3,"breed":"Golden Retriever","story":"Owner Passed away"}
GET /api/cat : returns the first cat in the list
ex/{"imageURL":"https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg","imageDescription":"Orange bengal cat with black stripes lounging on concrete.","name":"Fluffy","sex":"Female","age":2,"breed":"Bengal","story":"Thrown on the street"}
DELETE /api/dog : dequeues first dog
will delete and not return response--however subsequent get request will show next pet
DELETE /api/cat: dequeues first cat
will delete and not return response--however subsequent get request will show next pet
