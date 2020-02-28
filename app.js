//Creates new Express server
const express = require('express');
const app = express();
//port to run the server -> server will run on localhost:5000
const port = process.env.PORT || 5000;
//Basic route
app.get('/', (req, res) => res.send('Hello World'));

//tell Express to start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is running on port ${port}`));