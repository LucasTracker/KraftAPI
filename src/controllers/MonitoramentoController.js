/* eslint-disable indent */
const Monitoramento = require('../models/MonitoramentoModel')

const getAll = async(_,res) => {
    const lines = await Monitoramento.getAll()
    return res.status(200).json(lines)
}

const createMonitoramento = async(req,res) => {
    const lines = await Monitoramento.createMonitoramento(req.body)
    return res.status(201).json(lines)
}

const deleteMonitoramento = async(req,res) => {
    await Monitoramento.deleteMonitoramento(req.params.id)

    return res.status(200).json({message: `O id = ${req.params.id} foi deletado com sucesso!`})
}

const updateMonitoramento = async(req,res) =>{
    const lines = await Monitoramento.updateMonitoramento(req.params.id, req.body)
    return res.status(201).json(lines)
}

module.exports = {
    getAll,
    createMonitoramento,
    deleteMonitoramento,
    updateMonitoramento

}