
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beds').del()
    .then(function () {
      // Inserts seed entries
      return knex('beds').insert([
        { id: '501dc479-2579-411d-82ae-4aee52dcab8e' ,id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 1, isolation: 0},
        { id: '19ddb1f9-0184-4362-aa43-3498477ab5c7' ,id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 2, isolation: 0},
        { id: '31325378-d233-4cac-af35-1bc9385c0733' ,id_hospital: 1, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 3, isolation: 0},
        { id: '3f856bfc-8b27-4771-bed9-c30bd4c8d169' ,id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: '346b1a89-0908-4e5f-98f7-5fd7fa2fb7ba' ,id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: '6983fa84-e51d-40f6-9a27-2e53db026edb' ,id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: 'b8b32c88-1caf-484a-8966-da62897700a9' ,id_hospital: 1, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 4, isolation: 0},
        { id: '28568124-2535-44a2-b9ef-a9bb2062766d' ,id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: '10764f20-2627-4aa8-bcc0-6ffb4edcaab4' ,id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: '283aca62-8b14-46b3-9ab4-556376adb278' ,id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: '362b0672-7c56-4cc1-aeb2-99a1037702cf' ,id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 4, isolation: 0}
      ]);
    });
};  
