
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hospitals').del()
    .then(function () {
      // Inserts seed entries
      return knex('hospitals').insert([
        {id: 1, name_hospital: 'Santa Casa de Franca', id_country: 1, id_state: 25, id_city: 4256, latitude: '-20.5378899', longitude: '-47.4010595'  },
        {id: 2, name_hospital: 'Hospital Regional de Franca', id_country: 1, id_state: 25, id_city: 4256, latitude: '-20.5378899', longitude: '-47.4010595'  },
        {id: 3, name_hospital: 'Hospital São Joaquim', id_country: 1, id_state: 25, id_city: 4256, latitude: '-20.5378899', longitude: '-47.4010595'  },
        {id: 4, name_hospital: 'Hospital do Coração', id_country: 1, id_state: 25, id_city: 4256, latitude: '-20.5378899', longitude: '-47.4010595'  }
      ]);
    });
};
