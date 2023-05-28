/* eslint-disable indent */
const pool = require('../db/connection')

/**
 * 
 *  Model para realizar querys REST API na Tabela Linha de Produto
 * @returns 
 * 
 */


const getAll = async () => {
	const res = await pool.query('SELECT * FROM TB_LINHA_PRODUTO')
	return res.rows
}

const createLinhaProduto = async(produto) => {
	const {nm_produto} = produto
	await pool.query('INSERT INTO TB_LINHA_PRODUTO (nm_produto) VALUES ($1)',[nm_produto])
    const res = await pool.query('SELECT * FROM TB_LINHA_PRODUTO ORDER BY id_produto DESC LIMIT 1')
    return res.rows[0]
}

const deleteLinhaProduto = async(id) => {
    const res = await pool.query('DELETE FROM TB_LINHA_PRODUTO WHERE id_produto = $1',[id])
    return res.rowCount
}

const updateLinhaProduto = async(id,produto) => {
    const {nm_produto} = produto
    await pool.query('UPDATE TB_LINHA_PRODUTO SET nm_produto = $2 WHERE id_produto = $1', [id,nm_produto])
    const res = await pool.query('SELECT * FROM TB_LINHA_PRODUTO WHERE id_produto = $1', [id])
    return res.rows[0]
}

module.exports = {
	getAll,
	createLinhaProduto,
    deleteLinhaProduto,
    updateLinhaProduto
}