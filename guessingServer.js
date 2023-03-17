//As usual, we require express module and use app method.
const express = require("express");
const app = express();

// Serve static files from the public dir
app.use(express.static("public"));

//An end point for generating a ramdon number.
app.get("/random", randomNumber);


//send the random number to front end with a stringfied object.
function randomNumber(req, res) {
    let newObj = {};
    let num = Math.floor(Math.random() * 100) + 1;
    newObj.Number = num;
    res.send(JSON.stringify(newObj));
}

//listen to port 3020
app.listen(3020, function() {
   console.log("Listening on port 3020...");
});