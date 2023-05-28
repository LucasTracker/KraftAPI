/* eslint-disable indent */
const pool = require('../db/connection')


const getAll = async() => {
    const res = await pool.query('SELECT * FROM TB_MONITORAMENTO')
    return res.rows
}

const createMonitoramento = async(monitoramento) => {
    const {id_instalacao, id_estoque, dt_monitoramento} = monitoramento

    const query = 'INSERT INTO TB_MONITORAMENTO (id_instalacao, id_estoque, dt_monitoramento) VALUES ($1,$2,$3)'
    await pool.query(query,[id_instalacao, id_estoque, dt_monitoramento])
    const res = await pool.query('SELECT * FROM TB_MONITORAMENTO ORDER BY dt_monitoramento DESC LIMIT 1')
    return res.rows[0]
}


const deleteMonitoramento = async(id) => {
    const res = await pool.query('DELETE FROM TB_MONITORAMENTO WHERE id_instalacao = $1',[id])
    return res.rowCount
}

const updateMonitoramento = async(id, monitoramento) => {
    const {dt_monitoramento} = monitoramento

    await pool.query('UPDATE TB_MONITORAMENTO SET dt_monitoramento = $2 WHERE id_instalacao = $1', [id,dt_monitoramento])
    const res = await pool.query('SELECT * FROM TB_MONITORAMENTO WHERE id_instalacao = $1', [id])
    return res.rows[0]
}


module.exports = {
    getAll,
    createMonitoramento,
    deleteMonitoramento,
    updateMonitoramento

}