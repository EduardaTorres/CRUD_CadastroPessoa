const pessoas = require('../models/pessoaModel');

const listPessoa = async (req, res) => {

    try {
        const pessoa = await pessoas.findAll();
        res.send({...pessoa})
    } catch (error) {
        res.status(500).send(error)
    }
}

const createPessoa = async (req, res) => {
    try {
        const data = {...req.body}
        data.DataNascimento = new Date(data.DataNascimento)
    
        const pessoa = await pessoas.create({...data})
        console.log(pessoa)
        res.send({...pessoa})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {listPessoa,createPessoa};