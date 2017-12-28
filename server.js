'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const bodyParser = require('body-parser')
const knex = require('./knex')

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/emails',(req,res,next)=>{
  knex('emails').insert({email:req.body.email}).then((done)=>{
    res.status(201).send(done)
  })
})
app.get('/emails',(req,res,next)=>{
  knex('emails').then((list)=>{
    res.status(200).send(list)
  })
})

app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bay's old school"`)
})

module.exports = app;
