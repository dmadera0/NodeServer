const { request } = require("express");
const express = require("express");

const app = express();

const port = 4000
app.get('/',(request, response) =>{
    response.json ({message:"goodby!!!!"})
    });
app.get('/fun',(request, response) =>{
response.json ({message:"hello!!!!"})
});

app.listen(port, ()=>{
    console.log("we are listening on port 4000")
})