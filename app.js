const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

app.set('port', (process.env.PORT || 3000));


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cookies', (req, res) => {
    // Read cookies
    let counter = req.cookies['visitCounter'];
    console.log("Current counter value: " + counter);
    if (isNaN(counter)) counter = 0;
    counter ++;
    console.log("New counter value: " + counter);
    // Set cookie
    res.cookie('visitCounter', counter);
    res.send('Cookie was set to ' + counter);
  });
  

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
})
