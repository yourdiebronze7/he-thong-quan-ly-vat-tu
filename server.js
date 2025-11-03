const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Inventory Management System! This is where you can manage all your resources efficiently.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});