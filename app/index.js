'use strict'

const express = require('express')

const { PORT = '3000' } = process.env
const app = express()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});


app.use((req, res, next) => {
  Person.findAll()
  .then( persons => {
      res.status(200).send(JSON.stringify(persons));
  })
  .catch( err => {
      res.status(500).send(JSON.stringify(err));
  });
})

app.listen(PORT,()=>{
  sequelize.sync().then(()=>{
    console.log("Here")
  })
})
