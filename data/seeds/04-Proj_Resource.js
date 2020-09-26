
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Proj_Resources')
    .then(function () {
      // Inserts seed entries
      return knex('Proj_Resources').insert([
        {proj_id: 1, resource_ID: 1},
        {proj_id: 1, resource_ID: 2},
        {proj_id: 1, resource_ID: 3},
        {proj_id: 1, resource_ID: 4}
      ]);
    });
};
