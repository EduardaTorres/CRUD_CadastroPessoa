const {Router} = require('express')
const {listPessoa, createPessoa} = require('../controllers/pessoaControl')
const pessoaRoutes = Router()

pessoaRoutes.get('/', listPessoa)
pessoaRoutes.post('/', createPessoa)

module.exports = pessoaRoutes;