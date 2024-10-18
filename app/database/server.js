require ('dotenv').config();
const { Pool }  = require ('pg');

const {
DATABASE_HOST,
DATABASE_USER,
DATABASE_PASSWORD,
DATABASE_NAME,
DATABASE_PORT,
DATABASE_SCHEMA

} = process.env

const Client = new Pool({
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    port: DATABASE_PORT,
    schema: DATABASE_SCHEMA
});

module.exports = {
    query: (text, params) => Client.query(text, params)
  };