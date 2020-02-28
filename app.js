//Creates new Express server
const express = require('express');
const app = express();
//connect to database
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
//import routes
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

const bodyParser = require('body-parser');

mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
//port to run the server -> server will run on localhost:5000
const port = process.env.PORT || 5000;
//Basic route
app.get('/', (req, res) => res.send('Hello World'));

//tell Express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));

//run node app and open localhost:5000
//to user nodemon, run npm run start to get same result
//user npm run server to get changes to log on the server

//tell Express to use new imported routes
app.use('/api/users', users);
app.use('/api/tweets', tweets);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());