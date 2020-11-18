var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());

var customers = [];
var waitlist = [];

var tables = [
  {
    name: ''
    phone:''
    email:''
    customerOrder: 1
  },
  {
    name:''
    phone:''
    email:''
    customerOrder:2 
  },
  {
    name:''
    phone:''
    email:''
    customerOrder:3 
  },
  {
    name:''
    phone:''
    email:''
    customerOrder:4 
  },
  {
    name:''
    phone:''
    email:''
    customerOrder:5
  }

]

function isBooked (){
  if (tables.length <=5) {
    isBooked = true;
    }else{
      isBooked = false;
    }
  res.json(isBooked);
}

app.