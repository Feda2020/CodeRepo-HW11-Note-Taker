var express = require('express');
// Express configuration and sets up the basic properties for our express server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// This code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'));

// Set up the routes to our server
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);



app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
