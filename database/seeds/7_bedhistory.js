
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bedhistorys').del()
    .then(function () {
      // Inserts seed entries
      return knex('bedhistorys').insert([
        { id: 1, id_bed: '501dc479-2579-411d-82ae-4aee52dcab8e', id_patient: '411d', start_occupation: '2020-04-05 12:00:00'},
        { id: 2, id_bed: '19ddb1f9-0184-4362-aa43-3498477ab5c7', id_patient: '4362', start_occupation: '2020-04-05 12:00:00'},
        { id: 3, id_bed: '31325378-d233-4cac-af35-1bc9385c0733', id_patient: '4cac', start_occupation: '2020-04-05 12:00:00'},
        { id: 4, id_bed: '3f856bfc-8b27-4771-bed9-c30bd4c8d169', id_patient: '4771', start_occupation: '2020-04-05 12:00:00'},
        { id: 5, id_bed: '346b1a89-0908-4e5f-98f7-5fd7fa2fb7ba', id_patient: '4e5f', start_occupation: '2020-04-05 12:00:00'},
        { id: 6, id_bed: '6983fa84-e51d-40f6-9a27-2e53db026edb', id_patient: '40f6', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'},
        { id: 7, id_bed: 'b8b32c88-1caf-484a-8966-da62897700a9', id_patient: '484a', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'},
        { id: 8, id_bed: '28568124-2535-44a2-b9ef-a9bb2062766d', id_patient: '44a2', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'},
        { id: 9, id_bed: '10764f20-2627-4aa8-bcc0-6ffb4edcaab4', id_patient: '4aa8', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'},
        { id: 10, id_bed:'283aca62-8b14-46b3-9ab4-556376adb278', id_patient: '46b3', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'},
        { id: 11, id_bed:'362b0672-7c56-4cc1-aeb2-99a1037702cf', id_patient: '4cc1', start_occupation: '2020-04-05 12:00:00', end_occupation: '2020-04-05 18:30:00'}
      ]);
    });
};
