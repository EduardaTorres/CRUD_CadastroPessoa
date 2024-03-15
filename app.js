const express = require('express')
const db = require('./infrastructure/db');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const pessoaRoutes = require('./routes/pessoaRoutes')

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))

db.sync()

app.use('/pessoas', pessoaRoutes )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
