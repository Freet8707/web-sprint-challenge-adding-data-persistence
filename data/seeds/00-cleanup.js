
exports.seed = async function(knex) {
  await knex("Proj_Resources").truncate()
  await knex("Resources").truncate()
  await knex("Tasks").truncate()
  await knex("Projects").truncate()
  
};
