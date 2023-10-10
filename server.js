const express = require('express');
const path = require('path'); // Node.js module for working with file paths

const app = express();

// Serve static files from the 'html' directory
app.use(express.static(path.join(__dirname, 'html')));


// Define routes for additional HTML files
app.get('/experiment/bubble-sort/simulation/*', (req, res) => {
  console.log(`Server is running bubblesort/sim`);
  // Extract the wildcard portion of the URL
  const requestedFile = req.params[0];

  // Construct the absolute path to the requested HTML file
  const filePath = path.join(__dirname, 'experiment/bubble-sort/simulation', requestedFile);

  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

// app.use(express.static(__dirname + '/about'));

app.get('/bubblesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'bubblesort.html'));
});

app.get('/cslabtopics', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'cslabtopics.html'));
});

// app.get('/index', (req, res) => {
//   res.sendFile(path.join(__dirname, 'html', 'index.html'));
// });

app.use(express.static(__dirname + '/index'));

app.get('/mergesort', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'mergesor.html'));
});

app.get('/selectionsort', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'selectionsort.html'));
});

app.get('/subjects', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'subjects.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
Now, if you have an index.html file in the html directory, 
you can access it in your browser at http://localhost:3000/index.html 
(or the appropriate port if you specified a different one). 
Express will automatically serve the HTML file and any other static assets in that directory.
*/


// // Import the Express.js library
// const express = require('express');

// // Create an instance of the Express application
// const app = express();

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// // Start the server
// const port = process.env.PORT || 3000; // Use the provided port or 3000 as a default
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// To start your Express server, run the following command in your terminal: 
// node server.js

// Open a web browser or use a tool like curl or Postman to access 
// http://localhost:3000 (or the port you specified in your code). You should see "Hello, Express!" displayed in the response.