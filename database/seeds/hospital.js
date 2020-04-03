
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hospitals').del()
    .then(function () {
      // Inserts seed entries
      return knex('hospitals').insert([
        {id: 1, name_hospital: 'Santa Casa de Franca', id_country: 1058, id_state: 25, id_city: 3516200, latitude: '-20.5378899', longitude: '-47.4010595'  }
      ]);
    });
};
