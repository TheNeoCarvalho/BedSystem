
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beds').del()
    .then(function () {
      // Inserts seed entries
      return knex('beds').insert([
        { id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 1, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 2, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 3, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 1, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 2, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 3, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 4, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 1, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 2, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 3, isolation: 0, equipments: 0 },
        { id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 4, isolation: 0, equipments: 0 }
      ]);
    });
};
