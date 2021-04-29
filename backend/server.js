// Dependencies
// =============================================================
const { table } = require("console");
var express = require("express");
var path = require("path");
var frontPath = "C:\Users\berna\Desktop\Adopted Files\Tec de Monterrey\6to Semestre\Desarrollo de aplicaciones web\2do Parcial\Laboratorios\Laboratorio 8\Lab08-Node-Express\frontend/";

// Sets up the Express App
// =============================================================
var app = express();
var PORT_ONE = 3000;

// Sets up the Express app to handle data parsing.  These are Middlewares to detect the JSON format and 'formularios'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATA
//=============================================================
// var tables = [1, 2, 3, 4, 5];

var tables = [
    {
        name: 'Bernardo',
        phNum: 12345,
        email: 'A00570682@itesm.mx',
        id: 2,
        table: 1
    }
];

var listaRsv = [];


//Routes
//=============================================================

    // Display Home
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '..',"/frontend/home.html" ))
      });

    // Display Home
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, '..',"/frontend/tables.html" ))
      });
    // Display Home
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, '..',"/frontend/reserve.html" ))
      });
    
    // Api Tables, table data in JSON format
    app.get("/api/tables", function(req, res) {
    return res.json(tables);
    });
    
    //Api Waitlist, waitlist array data in JSON format
    app.get("/api/waitlist", function(req, res) {
        return res.json(listaRsv);
    });

    // Add New tables - takes in JSON input
    app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newtable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newtable);
  
    tables.push(newtable);
  
    res.json(newtable);
  });

//Start the server
app.listen(PORT_ONE, function(){
    console.log(`App listening in PORT ${PORT_ONE}`);
})