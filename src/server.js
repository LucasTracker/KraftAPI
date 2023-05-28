/* eslint-disable no-mixed-spaces-and-tabs */
const app = require('./app')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()

const PORT = process.env.PORT


const swaggerOptions = {
	definition: {
	  openapi: '3.0.0',
	  info: {
			title: 'API de Monitoramento do challenge da Kraft',
			version: '1.0.0',
	  },
	},
	apis: ['./src/routes/routes.js'], // Substitua com o padrão de nomenclatura dos seus arquivos de rota
}
  
const swaggerSpec = swaggerJsDoc(swaggerOptions)
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec)) 

app.listen(PORT, () => {
	console.log('Server running at port 8085')
})

module.exports = app