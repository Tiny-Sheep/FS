const express = require('express');
const fs = require('fs');

const app = express();

/*
// DANGER ZONE... why would you ever want a random stranger
// to know the contents of your app's directory????
skldaalkdj
app.get('/ls', (req, res) => {
  fs.readdir('./', (err, files) => {
    res.send(files.join(' '));
  });
});
*/

app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cool App</title>
      </head>
      <body>
        <h1>Hello World</h1>
        <h2>Contact me by raising your hand</h2>
      </body>
    </html>
    `);
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cool App</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
    `);
});

app.listen(3000, () => {
  console.log('hey, we are listening on port 3000');
});
