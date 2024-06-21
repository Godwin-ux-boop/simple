const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define a route to handle requests (optional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Send the HTML file
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
