/* eslint-disable indent */
const Estoque = require('../models/EstoqueModel')

const getAll = async(_,res) => {
    const lines = await Estoque.getAll()
    return res.status(200).json(lines)
}

const createEstoque = async(req,res) => {
    const lines = await Estoque.createEstoque(req.body)
    return res.status(201).json(lines)
}

const deleteEstoque = async(req,res) => {
    const lines = await Estoque.deleteEstoque(req.params.id)

    if(lines === 1) return res.status(200).json({message: `O id = ${req.params.id} foi deletado com sucesso!`})
}

const updateEstoque = async(req,res) =>{
    const lines = await Estoque.updateEstoque(req.params.id, req.body)
    return res.status(201).json(lines)
}

module.exports = {
    getAll,
    createEstoque,
    deleteEstoque,
    updateEstoque
}