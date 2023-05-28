/* eslint-disable indent */
const linhaProduto = require('../models/LinhaProdutoModel')

const getAll = async(_,res) => {
	const lines = await linhaProduto.getAll()
	return res.status(200).json(lines)
}

const createLinhaProduto = async(req,res) => {
    const lines = await linhaProduto.createLinhaProduto(req.body)
    return res.status(201).json(lines)
}

const deleteLinhaProduto = async(req,res) => {
    const id_produto = req.params.id
    console.log(id_produto)
    const lines = await linhaProduto.deleteLinhaProduto(id_produto)

    if(lines === 1) return res.status(200).json({message: `O id = ${id_produto} foi deletado do banco`})
}

const updateLinhaProduto = async(req,res) => {
    const id_produto = req.params.id
    const lines = await linhaProduto.updateLinhaProduto(id_produto,req.body)
    return res.status(201).json(lines)
}


module.exports = {
	getAll,
    createLinhaProduto,
    deleteLinhaProduto,
    updateLinhaProduto
}