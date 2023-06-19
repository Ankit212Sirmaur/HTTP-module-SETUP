
const express = require("express");

const PORT = 6060;

const app = express();

app.get('/home' , (req, res) =>{
    response.send("hi ");
    response.json({
        msg:'ok',
    });
})

app.post('/about', (req, res) =>{
    res.send('welcome to post post method');
    
})

app.listen(PORT, ()=>{
    console.log(`example app on  listening on port ${PORT}`);
})
