
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countrys').del()
    .then(function () {
      // Inserts seed entries
      return knex('countrys').insert([
        {id: 1, cod_country: 1058, name_country:'Brasil', activate: true}
      ]);
    });
};
