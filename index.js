require('dotenv').config();
const express = require('express');
const app = express();
const os = require('os');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hiii");
});


app.get('/os', (req, res) => {
    res.send(os.type());
});


// Allocating os moduleconst   // Printing os.type() valueconsole.log(os.type());
app.listen(port, () => {
    console.log(`Connected to :- ${port}`)
})
