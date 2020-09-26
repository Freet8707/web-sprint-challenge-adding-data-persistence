
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources')
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {resource_name: "Computer", description: "Can't write code without it !"},
        {resource_name: "Internet access", description: "You'll need this for documentation!"},
        {resource_name: "keyboard", description: "you'll need this to type your code, of course !"},
        {resource_name: "mouse", description: "much easier than using a track pad"}
      ]);
    });
};
