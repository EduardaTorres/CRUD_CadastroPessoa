const express = require('express')
const db = require('./infrastructure/db');
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const pessoaRoutes = require('./routes/pessoaRoutes')


app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))

db.sync()

app.use('/pessoas', pessoaRoutes )

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de gerenciamento de pessoas!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
