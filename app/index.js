'use strict'

const express = require('express')
const { PORT = '3000' } = process.env
const env = process.env.NODE_ENV || 'development';
const app = express()
const db = require('./models')

app.get("/",(req, res, next) => {
  db.User.findAll().then((val)=>{
    res.json(val)
  })
})

app.get("/add",(req, res, next) => {
  db.User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
  }).then((user)=>{
    res.json(user)
  })
})


app.listen(PORT,()=>{
    db.sequelize.sync().then(()=>{
      //If in DEV then seed
     //if(env==='development') require()
      
    }).catch((err)=>{
      console.log('ERR:');
      console.log(err)
    })
})
