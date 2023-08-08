
const express = require("express");
const url = require('url');
const PORT = 6060;

const app = express();

app.get('/home' , (req, res) =>{
    response.send("hi ");
    response.json({
        msg:'ok',
    });
})

// query params

app.get('/search', (req, res) =>{
    res.send('hello from the search page' + "hey" + req.query.name + "you are" + req.query.age + "old");
})

app.post('/about', (req, res) =>{
    res.send('welcome to post post method');
    
})

app.listen(PORT, ()=>{
    console.log(`example app on  listening on port ${PORT}`);
})
