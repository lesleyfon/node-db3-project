const Knex = require("knex");
const configOptions = require('./../knexfile')
const db = Knex(configOptions.development)

function find() {
  return db('schemes');
}


module.exports = {
    find
}