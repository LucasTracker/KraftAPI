/* eslint-disable indent */
const pool = require('../db/connection')


const getAll = async() => {
    const res = await pool.query('SELECT * FROM TB_ESTOQUE')
    return res.rows
}

const createEstoque = async(estoque) => {
    const {id_produto,qtd_entrada,qtd_saida,qtd_descarte} = estoque

    const query = 'INSERT INTO TB_ESTOQUE (id_produto, qtd_entrada, qtd_saida, qtd_descarte) VALUES ($1,$2,$3,$4)'
    await pool.query(query,[id_produto,qtd_entrada,qtd_saida,qtd_descarte])
    const res = await pool.query('SELECT * FROM TB_ESTOQUE ORDER BY id_estoque DESC LIMIT 1')
    return res.rows[0]
}


const deleteEstoque = async(id) => {
    const res = await pool.query('DELETE FROM TB_ESTOQUE WHERE id_estoque = $1',[id])
    return res.rowCount
}

const updateEstoque = async(id, estoque) => {
    const {id_produto,qtd_entrada,qtd_saida,qtd_descarte} = estoque

    await pool.query('UPDATE TB_ESTOQUE SET qtd_entrada = $2, qtd_saida = $3, qtd_descarte = $4, id_produto = $5 WHERE id_estoque = $1', [id,qtd_entrada,qtd_saida,qtd_descarte, id_produto])
    const res = await pool.query('SELECT * FROM TB_ESTOQUE WHERE id_estoque = $1', [id])
    return res.rows[0]
}


module.exports = {
    getAll,
    createEstoque,
    deleteEstoque,
    updateEstoque

}