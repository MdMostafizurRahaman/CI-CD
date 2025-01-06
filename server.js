const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World this is a practice for CICD!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
