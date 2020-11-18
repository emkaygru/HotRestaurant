var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;


var customers = [];
var waitlist = [];

var tables = [
  {
    name: '',
    phone:'',
    email:'',
    customerOrder: 1
  },
  {
    name:'',
    phone:'',
    email:'',
    customerOrder:2 
  },
  {
    name:'',
    phone:'',
    email:'',
    customerOrder:3 
  },
  {
    name:'',
    phone:'',
    email:'',
    customerOrder:4 
  },
  {
    name:'',
    phone:'',
    email:'',
    customerOrder:5
  }

]

//BRIAN ADDED THIS :^)
//HOME PAGE
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "home.html"));
});

//TABLES PAGE
app.get("/tables", function(request, response) {
    response.sendFile(path.join(__dirname, "tables.html"));
});

//RESERVATIONS PAGE
app.get("/reserve", function(request, response) {
    response.sendFile(path.join(__dirname, "reserve.html"));
});

app.post('/api/reserve', function(req, res){
  console.log('Your reservation has been submitted!');
  console.log(req.body)
})

function isBooked (){
  if (tables.length <=5) {
    isBooked = true;
    }else{
      isBooked = false;
    }
  res.json(isBooked);
}

app.listen(PORT, function() {
  console.log('App is listening on PORT' + PORT)
})