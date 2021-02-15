
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks')
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {task_number: 1, description: 'open up knex.js reference site', proj_id: 1},
        {task_number: 2, description: 'look at notes for problems you\'re having', proj_id: 1},
        {task_number: 3, description: 'write down possible solutions', proj_id: 1}
      ]);
    });
};
