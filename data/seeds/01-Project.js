
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects')
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {project_name: "Learn more about Knex"}
      ]);
    });
};
