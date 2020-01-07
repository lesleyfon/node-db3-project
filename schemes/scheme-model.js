const Knex = require("knex");
const configOptions = require('./../knexfile')
const db = Knex(configOptions.development)

function find() {
  return db('schemes');
}
function findById(id) {
    return db('schemes').where({id: id}).first()
}

async function findSteps(id){

    return db('steps')
    .where({scheme_id: id})
    .select('step_number', 'instructions','scheme_id')
}
module.exports = {
    find,
    findById,
    findSteps
}