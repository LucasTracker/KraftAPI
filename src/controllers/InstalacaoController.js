/* eslint-disable indent */
const Instalacao= require('../models/InstalacaoModel')

const getAll = async(_,res) => {
    const lines = await Instalacao.getAll()
    return res.status(200).json(lines)
}

const createInstalacao = async(req,res) => {
    const lines = await Instalacao.createInstalacao(req.body)
    return res.status(201).json(lines)
}

const deleteInstalacao = async(req,res) => {
    const lines = await Instalacao.deleteInstalacao(req.params.id)

    if(lines === 1) return res.status(200).json({message: `O id = ${req.params.id} foi deletado com sucesso!`})
}

const updateInstalacao = async(req,res) =>{
    const lines = await Instalacao.updateInstalacao(req.params.id, req.body)
    return res.status(201).json(lines)
}

module.exports = {
    getAll,
    createInstalacao,
    deleteInstalacao,
    updateInstalacao,
}