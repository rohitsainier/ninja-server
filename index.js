const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hello My first route is working...");
});

app.get('/api/users',(req,res) => {
    res.send([{'name':'rohit'},{'age':'25'},{'village':'Ram saran majra'}]);
});

app.listen(8000,() => console.log('Listing on port 8000...'));
