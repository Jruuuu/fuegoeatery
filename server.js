// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Data
// ===========================================================
const viewTable = [
    {
    "customerName": "",
    "phoneNumber": "",
    "customerEmail": "",
    "customerID": ""
    }
]

const makeReservation = [];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/reserve.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(viewTable);
})



// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

