const {Router} = require('express')
const {listPessoa, createPessoa, updatePessoa, deletePessoa, getCPF} = require('../controllers/pessoaControl')
const pessoaRouter = Router()

pessoaRouter.get('/', listPessoa)
pessoaRouter.post('/', createPessoa)
pessoaRouter.put('/:id', updatePessoa)
pessoaRouter.delete('/:id', deletePessoa)
pessoaRouter.get('/cpf/:cpf', getCPF)

module.exports = pessoaRouter;