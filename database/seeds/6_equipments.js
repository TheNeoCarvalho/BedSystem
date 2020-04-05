
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('equipments').del()
    .then(function () {
      // Inserts seed entries
      return knex('equipments').insert([
        { id: 1, id_bed: '501dc479-2579-411d-82ae-4aee52dcab8e' ,name_equipment: 'Eletrocardiógrafo', description: 'Eletrocardiógrafo' },
        { id: 2, id_bed: '19ddb1f9-0184-4362-aa43-3498477ab5c7' ,name_equipment: 'Eletrocardiógrafo', description: 'Eletrocardiógrafo' },
        { id: 3, id_bed: '31325378-d233-4cac-af35-1bc9385c0733' ,name_equipment: 'Oxímetro', description: 'Oxímetro' },
        { id: 4, id_bed: '3f856bfc-8b27-4771-bed9-c30bd4c8d169' ,name_equipment: 'Oxímetro', description: 'Oxímetro' },
        { id: 5, id_bed: '346b1a89-0908-4e5f-98f7-5fd7fa2fb7ba' ,name_equipment: 'Monitor multiparamétrico', description: 'Monitor multiparamétrico' },
        { id: 6, id_bed: '6983fa84-e51d-40f6-9a27-2e53db026edb' ,name_equipment: 'Monitor multiparamétrico', description: 'Monitor multiparamétrico' },
        { id: 7, id_bed: 'b8b32c88-1caf-484a-8966-da62897700a9' ,name_equipment: 'Monitor multiparamétrico', description: 'Monitor multiparamétrico' },
        { id: 8, id_bed: '28568124-2535-44a2-b9ef-a9bb2062766d' ,name_equipment: 'Ventilador pulmonar', description: 'Ventilador pulmonar' },
        { id: 9, id_bed: '10764f20-2627-4aa8-bcc0-6ffb4edcaab4' ,name_equipment: 'Ventilador pulmonar', description: 'Ventilador pulmonar' },
        { id: 10, id_bed: '283aca62-8b14-46b3-9ab4-556376adb278' ,name_equipment: 'Ventilador pulmonar', description: 'Ventilador pulmonar' },
        { id: 11, id_bed: '362b0672-7c56-4cc1-aeb2-99a1037702cf' ,name_equipment: 'Estativa', description: 'Estativa' },
      ]);
    });
};
