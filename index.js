const express = require("express");

const app = express();

const port = 4000

app.listen(port, ()=>{
    console.log("we are listening on port 4000")
})