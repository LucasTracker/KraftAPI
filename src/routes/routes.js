const express = require('express')
const router = express.Router()
const linhaProdutoController = require('../controllers/LinhaProdutoController')
const InstalacaoController = require('../controllers/InstalacaoController')
const EstoqueController = require('../controllers/EstoqueController')
const Monitoramento = require('../controllers/MonitoramentoController')

/* Rotas para o Endpoint Linha de Produto *************************************/

/**
 * @swagger
 * /linhaproduto:
 *      get:
 *          tags: ['Linhas de Produtos']
 *          summary: Retorna todos os produtos
 *          description: Retorna todos os produtos
 *          responses:
 *              '200':
 *                  description: Retorna todas as linhas de produtos!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Produto'
 *              '400':
 *                   description: Não foi possível retornar as linhas de produtos!
 * 
 * 
 * components:
 *      schema:
 *          Produto:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  nm_produto:
 *                      type: string   
 *
 */
router.get('/linhaproduto', linhaProdutoController.getAll)

/**
 * @swagger
 * /linhaproduto:
 *      post:
 *          tags: ['Linhas de Produtos']
 *          summary: Cria um novo produto
 *          description: Cria um novo produto
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nm_produto:
 *                                  type: string
 *          responses:
 *              '201':
 *                  description: Retorna o JSON do produto criado!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Produto'
 *              '400':
 *                   description: Não foi possível criar o produto!
 * 
 * 
 * components:
 *      schema:
 *          Produto:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  nm_produto:
 *                      type: string   
 *
 */

router.post('/linhaproduto', linhaProdutoController.createLinhaProduto)

/**
 * @swagger
 * /linhaproduto/{id_produto}:
 *      delete:
 *          tags: ['Linhas de Produtos']
 *          summary: Remove um produto
 *          description: Remove um produto
 *          parameters:
 *              - in: path
 *                name: id_produto
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              '200':
 *                  description: Produto removido com sucesso!
 *
 *              '400':
 *                   description: Não foi possível remover o produto!
 * 
 * 
 * components:
 *      schema:
 *          Produto:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  nm_produto:
 *                      type: string   
 *
 */
router.delete('/linhaproduto/:id', linhaProdutoController.deleteLinhaProduto)


/**
 * @swagger
 * /linhaproduto/{id_produto}:
 *      put:
 *          tags: ['Linhas de Produtos']
 *          summary: Atualiza os dados do produto
 *          description: Atualiza os dados produto
 *          parameters:
 *              - in: path
 *                name: id_produto
 *                required: true
 *                schema:
 *                  type: integer  
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id_produto:
 *                                  type: integer
 *                              nm_produto:
 *                                  type: string
 *          responses:
 *              '200':
 *                  description: Retorna o JSON do produto atualizado!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Produto'
 *              '400':
 *                   description: Não foi possível atualizar o produto!
 * 
 * 
 * components:
 *      schema:
 *          Produto:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  nm_produto:
 *                      type: string   
 *
 */
router.put('/linhaproduto/:id', linhaProdutoController.updateLinhaProduto)
/************************************************************************* */

/* Rotas para o Endpoint Instalação */

/**
 * @swagger
 * /instalacao:
 *      get:
 *          tags: ['Instalação']
 *          summary: Retorna as instalações cadastradas no sistema
 *          description: Retorna as instalações cadastradas no sistema     
 *      
 *          responses:
 *              '200':
 *                  description: Retorna o JSON das Instalações!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Instalacao'
 *              '400':
 *                   description: Não foi possível buscar as Instalações
 * 
 * 
 * components:
 *      schema:
 *          Instalacao:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  ins_estado:
 *                      type: string   
 *                  ins_cidade:
 *                      type: string
 *                  ins_energia_consumida:
 *                      type: string
 */
router.get('/instalacao', InstalacaoController.getAll)

/**
 * @swagger
 * /instalacao:
 *      post:
 *          tags: ['Instalação']
 *          summary: Cria uma nova instalação
 *          description: Cria uma nova instalação
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              ins_estado:
 *                                  type: string   
 *                              ins_cidade:
 *                                  type: string
 *                              ins_energia_consumida:
 *                                  type: string 
 *          responses:
 *              '200':
 *                  description: Cria e retorna o JSON da instalação criada!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Instalacao'
 *              '400':
 *                   description: Não foi possível criar uma instalação
 * 
 * 
 * components:
 *      schema:
 *          Instalacao:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  ins_estado:
 *                      type: string   
 *                  ins_cidade:
 *                      type: string
 *                  ins_energia_consumida:
 *                      type: string
 */
router.post('/instalacao', InstalacaoController.createInstalacao)

/**
 * @swagger
 * /instalacao/{id_instalacao}:
 *      delete:
 *          tags: ['Instalação']
 *          summary: Remove uma instalação
 *          description: Remove uma instalação
 *          parameters:
 *              - in: path
 *                name: {id_instalacao}
 *                required: true                 
 *          responses:
 *              '200':
 *                  description: Instalação removida com sucesso!
 *                  
 *              '400':
 *                   description: Não foi possível remover a instalação!
 * 
 * 
 * components:
 *      schema:
 *          Instalacao:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  ins_estado:
 *                      type: string   
 *                  ins_cidade:
 *                      type: string
 *                  ins_energia_consumida:
 *                      type: string
 */
router.delete('/instalacao/:id', InstalacaoController.deleteInstalacao)

/**
 * @swagger
 * /instalacao/{id_instalacao}:
 *      put:
 *          tags: ['Instalação']
 *          summary: Atualiza uma instalação
 *          description: Atualiza uma instalação
 *          parameters:
 *              - in: path
 *                name: id_instalacao
 *                required: true
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              ins_estado:
 *                                  type: string   
 *                              ins_cidade:
 *                                  type: string
 *                              ins_energia_consumida:
 *                                  type: string 
 *          responses:
 *              '200':
 *                  description: Instalação atualizada com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Instalacao'
 *              '400':
 *                   description: Não foi possível atualizar os dados da instalação!
 * 
 * 
 * components:
 *      schema:
 *          Instalacao:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  ins_estado:
 *                      type: string   
 *                  ins_cidade:
 *                      type: string
 *                  ins_energia_consumida:
 *                      type: string
 */

router.put('/instalacao/:id', InstalacaoController.updateInstalacao)

/************************************************************************* */

/* Rotas para o Endpoint Estoque */

/**
 * @swagger
 * /estoque:
 *      get:
 *          tags: ['Estoque']
 *          summary: Recebe um JSON de todos os estoques
 *          description: Recebe um JSON de todos os estoques
 *          responses:
 *              '200':
 *                  description: JSON do estoque recebid com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Estoque'
 *              '400':
 *                   description: Não foi possível receber os dados do estoque!
 * 
 * 
 * components:
 *      schema:
 *          Estoque:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  qtd_entrada:
 *                      type: number
 *                  qtd_saida:
 *                      type: number
 *                  qtd_descarte:
 *                      type: number
 */
router.get('/estoque', EstoqueController.getAll)
/**
 * @swagger
 * /estoque:
 *      post:
 *          tags: ['Estoque']
 *          summary: Cria um estoque
 *          description: Cria um estoque e recebe um JSON do estoque criado!
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id_estoque:
 *                                  type: number
 *                              qtd_entrada:
 *                                  type: number
 *                              qtd_saida:
 *                                  type: number
 *                              qtd_descarte:
 *                                  type: number
 *          responses:
 *              '200':
 *                  description: Estoque criado com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Estoque'
 *              '400':
 *                   description: Não foi possível criar o estoque!
 * 
 * 
 * components:
 *      schema:
 *          Estoque:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  qtd_entrada:
 *                      type: number
 *                  qtd_saida:
 *                      type: number
 *                  qtd_descarte:
 *                      type: number
 */
router.post('/estoque', EstoqueController.createEstoque)

/**
 * @swagger
 * /estoque/{id_estoque}:
 *      delete:
 *          tags: ['Estoque']
 *          summary: Remove um estoque
 *          description: Remove um estoque
 *          parameters:
 *              - in: path
 *                name: id_estoque
 *                required: true         
 *          responses:
 *              '200':
 *                  description: Estoque removido com sucesso!
 *              '400':
 *                   description: Não foi possível remover o estoque!
 * 
 * 
 * components:
 *      schema:
 *          Estoque:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  qtd_entrada:
 *                      type: number
 *                  qtd_saida:
 *                      type: number
 *                  qtd_descarte:
 *                      type: number
 */
router.delete('/estoque/:id', EstoqueController.deleteEstoque)

/**
 * @swagger
 * /estoque/{id_estoque}:
 *      put:
 *          tags: ['Estoque']
 *          summary: Atualiza um estoque
 *          description: Atualiza um estoque e recebe um JSON do estoque atualizado!
 *          parameters:
 *              - in: path
 *                name: id_estoque
 *                required: true
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id_estoque:
 *                                  type: number
 *                              qtd_entrada:
 *                                  type: number
 *                              qtd_saida:
 *                                  type: number
 *                              qtd_descarte:
 *                                  type: number
 *          responses:
 *              '200':
 *                  description: Estoque atualizado com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Estoque'
 *              '400':
 *                   description: Não foi possível atualizar o estoque!
 * 
 * 
 * components:
 *      schema:
 *          Estoque:
 *              type: object
 *              properties:
 *                  id_produto:
 *                      type: number
 *                  qtd_entrada:
 *                      type: number
 *                  qtd_saida:
 *                      type: number
 *                  qtd_descarte:
 *                      type: number
 */
router.put('/estoque/:id', EstoqueController.updateEstoque)

/*************************************************************************** */


/** Rotas para o Endpoint Estoque */

/**
 * @swagger
 * /monitoramento:
 *      get:
 *          tags: ['Monitoramento']
 *          summary: Retorna uma lista dos logs de Monitoramento
 *          description: Retorna uma lista dos logs de Monitoramento
 *         
 *          responses:
 *              '200':
 *                  description: Retornou uma lista de logs com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Monitoramento'
 * 
 *              '400':
 *                    description: Não foi possível retornar os logs
 *                      
 * components:
 *      schema:
 *          Monitoramento:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  id_estoque:
 *                      type: number
 *                  dt_monitoramento:
 *                      type: string
 *                      format: date
 *
 */
router.get('/monitoramento', Monitoramento.getAll)

/**
 * @swagger
 * /monitoramento:
 *      post:
 *          tags: ['Monitoramento']
 *          summary: Cria um log de monitoramento
 *          description: Cria um log de monitoramento
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id_instalacao: 
 *                                  type: integer
 *                                  example: 1
 *                              id_estoque:
 *                                  type: integer
 *                                  example: 2
 *                              dt_monitoramento:
 *                                  type: string
 *                                  example: 30/05/1950
 *              
 *          responses:
 *              '201':
 *                  description: Retornou uma lista de logs com sucesso!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Monitoramento'
 *              '400':
 *                  description: Não foi possível criar o log!
 * 
 * 
 * components:
 *      schema:
 *          Monitoramento:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  id_estoque:
 *                      type: number
 *                  dt_monitoramento:
 *                      type: string
 *                      format: date
 *
 */
router.post('/monitoramento', Monitoramento.createMonitoramento)

/**
 * @swagger
 * /monitoramento/{id_instalacao}:
 *      delete:
 *          tags: ['Monitoramento']
 *          summary: Remove um log de monitoramento
 *          description: Remove um log de monitoramento         
 *          parameters:
 *              - in: path
 *                name: id_instalacao
 *                required: true
 *          responses:
 *              '200':
 *                  description: Log removido com sucesso! 
 *              '400':
 *                    description: Não foi possível remover o log!
 * 
 * components:
 *      schema:
 *          Monitoramento:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  id_estoque:
 *                      type: number
 *                  dt_monitoramento:
 *                      type: string
 *                      format: date
 *
 */
router.delete('/monitoramento/:id', Monitoramento.deleteMonitoramento)

/**
 * @swagger
 * /monitoramento/{id_instalacao}:
 *      put:
 *          tags: ['Monitoramento']
 *          summary: Atualiza os logs de monitoramento
 *          description: Atualiza os logs de monitoramento
 *          parameters:
 *                - in: path
 *                  name: id_instalacao
 *                  required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id_instalacao: 
 *                                  type: integer
 *                                  example: 1
 *                              id_estoque:
 *                                  type: integer
 *                                  example: 2
 *                              dt_monitoramento:
 *                                  type: string
 *                                  example: 30/05/1950
 *              
 *          responses:
 *              '201':
 *                  description: Retorna o log atualizado!
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schema/Monitoramento'
 *              '400':
 *                   description: Não foi possível atualizar o log!
 * 
 * 
 * components:
 *      schema:
 *          Monitoramento:
 *              type: object
 *              properties:
 *                  id_instalacao:
 *                      type: number
 *                  id_estoque:
 *                      type: number
 *                  dt_monitoramento:
 *                      type: string
 *                      format: date
 *
 */
router.put('/monitoramento/:id', Monitoramento.updateMonitoramento)

/*************************************************************************** */
module.exports = router