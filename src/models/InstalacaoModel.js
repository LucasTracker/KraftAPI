/* eslint-disable indent */
const pool = require('../db/connection')


const getAll = async() => {
    const res = await pool.query('SELECT * FROM TB_INSTALACAO')
    return res.rows
}

const createInstalacao = async(instalacao) => {
    const {ins_estado,ins_cidade, ins_energia_consumida} = instalacao
    const query = 'INSERT INTO TB_INSTALACAO (ins_estado, ins_cidade, ins_energia_consumida) VALUES ($1,$2,$3)'
    await pool.query(query,[ins_estado,ins_cidade,ins_energia_consumida])
    const res = await pool.query('SELECT * FROM TB_INSTALACAO ORDER BY id_instalacao DESC LIMIT 1')
    return res.rows[0]
}


const deleteInstalacao = async(id) => {
    const res = await pool.query('DELETE FROM TB_INSTALACAO WHERE id_instalacao = $1',[id])
    return res.rowCount
}

const updateInstalacao = async(id, instalacao) => {
    const {ins_estado,ins_cidade,ins_energia_consumida} = instalacao

    await pool.query('UPDATE TB_INSTALACAO SET ins_estado = $2, ins_cidade = $3, ins_energia_consumida = $4 WHERE id_instalacao = $1', [id,ins_estado,ins_cidade, ins_energia_consumida])
    const res = await pool.query('SELECT * FROM TB_INSTALACAO WHERE id_instalacao = $1', [id])
    return res.rows[0]
}


module.exports = {
    getAll,
    createInstalacao,
    deleteInstalacao,
    updateInstalacao
}