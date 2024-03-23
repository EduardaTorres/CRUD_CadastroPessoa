const pessoas = require('../models/pessoaModel');
const { validarCPF } = require('../uteis/util')

const cpfExists = async (cpf) => {
    const existingPessoa = await pessoas.findOne({ where: { CPF: cpf } })
    return !!existingPessoa;
};

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
        data.CPF = data.CPF.replace(/[^\d]/g, '')
        
        cpf = data.CPF
        if (!validarCPF(cpf)) {
            return res.status(400).json({ error: 'CPF inválido' })
        }
        if (await cpfExists(cpf)) {
            return res.status(400).json({ error: 'CPF já cadastrado' });
        }

        const pessoa = await pessoas.create({...data})
        console.log(pessoa)
        res.send({...pessoa})
    } catch (error) {
        res.status(500).send(error)
    }
}

const updatePessoa = async (req, res) => {
    try {
        const { id } = req.params
        const data = { ...req.body }
        data.DataNascimento = new Date(data.DataNascimento)
        data.CPF = data.CPF.replace(/[^\d]/g, '')
        cpf = data.CPF
        if (!validarCPF(cpf)) {
            return res.status(400).json({ error: 'CPF inválido' })
        }
        const pessoa = await pessoas.findByPk(id)
        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' })
        }
        await pessoa.update(data)
        res.status(204).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}

const deletePessoa = async (req, res) => {
    try {
        const { id } = req.params
        const pessoa = await pessoas.findByPk(id)
        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' })
        }
        await pessoa.destroy()
        res.status(204).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getCPF = async (req, res) => {
    try {
        const { cpf } = req.params
        if (!validarCPF(cpf)) {
            return res.status(400).json({ error: 'CPF inválido' })
        }
        const pessoa = await pessoas.findOne({ where: { CPF: cpf } })
        if (!pessoa) {
            return res.status(404).json({ error: 'CPF não encontrada' });
        }
        return res.json(pessoa.dataValues)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {listPessoa, createPessoa, updatePessoa, deletePessoa, getCPF};