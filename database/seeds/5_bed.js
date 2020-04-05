
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
        { id: '362b0672-7c56-4cc1-aeb2-99a1037702cf' ,id_hospital: 1, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 4, isolation: 0},

        { id: '08bdd74c-6ec5-4f6f-8918-349160c9969e' ,id_hospital: 2, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 1, isolation: 0},
        { id: '4b5288f2-717d-4b8f-9975-7678de45a0c4' ,id_hospital: 2, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 2, isolation: 0},
        { id: '9789e887-5f6d-4c72-8ffa-cfccf83a5944' ,id_hospital: 2, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 3, isolation: 0},
        { id: '0acdb9af-1e73-4fa3-9861-fc9999b298e0' ,id_hospital: 2, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: '4547eb6f-8e63-4974-bae2-d82affa0a04a' ,id_hospital: 2, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: 'e119c5d1-e919-42bb-9df8-8d97855662ef' ,id_hospital: 2, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: 'a8a70bed-d9e7-4637-84ee-c28e804318f2' ,id_hospital: 2, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 4, isolation: 0},
        { id: '1cda7689-ff23-46e3-89cd-5d8217c5b66c' ,id_hospital: 2, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: 'eae1d1b0-246f-4f68-84f0-733bba6b7b5e' ,id_hospital: 2, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: 'b612e332-c9df-4dba-829c-79d6073d2222' ,id_hospital: 2, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: 'b48b26ce-650b-4331-a63b-0efd977ab790' ,id_hospital: 2, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 4, isolation: 0},

        { id: '04e6cc85-57e5-403c-9efc-e9a3592bee47' ,id_hospital: 3, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 1, isolation: 0},
        { id: '34c4abaa-fe8a-4bba-ab4c-47f0912d7691' ,id_hospital: 3, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 2, isolation: 0},
        { id: '54e36da7-6403-4040-b594-ef1e0dc32e77' ,id_hospital: 3, floor: 'terreo', livingroom: '4', allah: 'COVID_01', bed: 3, isolation: 0},
        { id: '8cdf88b6-78ee-43f1-9b7f-9265ff814ebd' ,id_hospital: 3, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: 'e1b5ab76-37c3-4e6a-87b6-30472f0beff0' ,id_hospital: 3, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: '952f06d9-bdd6-42a3-a86f-31e9fd240031' ,id_hospital: 3, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: 'a25b238d-2b09-4d6b-adae-f16f1a22f01d' ,id_hospital: 3, floor: '1', livingroom: '1', allah: 'COVID_02', bed: 4, isolation: 0},
        { id: '752035ed-ac0e-46c3-bb9f-cb499f97e7ca' ,id_hospital: 3, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 1, isolation: 0},
        { id: '55eb5735-9f76-4447-a1b1-7a428b606158' ,id_hospital: 3, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 2, isolation: 0},
        { id: '5f6629c7-f241-46ac-be05-d9d0c28021a2' ,id_hospital: 3, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 3, isolation: 0},
        { id: '634e1ffd-7eca-4b01-b700-659a5c7c6331' ,id_hospital: 3, floor: '1', livingroom: '2', allah: 'COVID_02', bed: 4, isolation: 0}
      ]);
    });
};  
