// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
const viewTable = {

};

const makeReservation = {

};

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/viewTable", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/makeReservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});



// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

