const {Client} = require('pg')
require('dotenv').config()

const connection = new Client(
	{
		database:process.env.PG_DB,
		user:process.env.PG_USER,
		password:process.env.PG_PASS,
		host: process.env.PG_HOST,
		port: 5432,
	}
)

connection.connect()

module.exports = connection