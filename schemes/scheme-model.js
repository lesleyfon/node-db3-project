const Knex = require("knex");
const configOptions = require('./../knexfile')
const db = Knex(configOptions.development)

function find() {
  return db('schemes');
}
function findById(id) {
    return db('schemes').where({id: id}).first()
}

function findSteps(id){

    return db('steps')
    .where({scheme_id: id})
    .select('step_number', 'instructions','scheme_id')
}
async function add(scheme) {
    const [ insertedSchemeId ] = await db('schemes').insert(scheme);
    return findById(insertedSchemeId);
}

async function addStep (stepData, id){
    const [stepId] = await db('steps').insert(stepData).where({scheme_id: id});

    return findSteps( stepId )
}
module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep
}