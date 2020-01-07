const Knex = require("knex");
const configOptions = require('./../knexfile')
const db = Knex(configOptions.development)

function find() {
  return db('schemes');
}
function findById(id) {
    return db('schemes').where({id: id}).first()
}

module.exports = {
    find,
    findById
}