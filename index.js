const express = require('express');
const app = express();

const config = require('dotenv').config()
const port = process.env.PORT || 8001;
const jsonData = require('./jsonData');

app.use(middleware);

function middleware(req, res, next){
  console.log("Middleware started.....");
  next();
}

app.get('/', (req, res)=>{
  res.send("Welcome to my Node Server");
})

app.get('/home', (req, res)=>{
  res.send("<h1>Welcome to HOME PAGE</h1>")
});

app.get('/api/data',(req, res)=>{
  res.json(jsonData);
})

app.listen(port,(error)=>{
  if(error){
    console.log(error)
  }
  else{
    console.log(`Server running at PORT :  ${port}`)
  }
})