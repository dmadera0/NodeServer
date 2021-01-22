const { request } = require("express");
const express = require("express");

const app = express();

const port = 4000

const candies = [
    {id: 1, name: 'Skittles'},
    {id: 2, name: 'Starburst'},
    {id: 3, name: 'M&Ms'},
    {id: 4, name: 'Twix'},

]
app.get('/',(request, response) =>{
    response.json ({message:"goodby!!!!"})
    });
app.get('/candies',(request, response) =>{
response.json (candies)
});

app.listen(port, ()=>{
    console.log("we are listening on port 4000")
})