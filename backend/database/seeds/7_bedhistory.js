
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bedhistorys').del()
    .then(function () {
      // Inserts seed entries
      return knex('bedhistorys').insert([
        { id: 1, id_bed: '501dc479-2579-411d-82ae-4aee52dcab8e', id_patient: '411d', occupation: 0, age: '30'},
        { id: 2, id_bed: '19ddb1f9-0184-4362-aa43-3498477ab5c7', id_patient: '4362', occupation: 0, age: '30'},
        { id: 3, id_bed: '31325378-d233-4cac-af35-1bc9385c0733', id_patient: '4cac', occupation: 0, age: '30'},
        { id: 4, id_bed: '3f856bfc-8b27-4771-bed9-c30bd4c8d169', id_patient: '4771', occupation: 0, age: '30'},
        { id: 5, id_bed: '346b1a89-0908-4e5f-98f7-5fd7fa2fb7ba', id_patient: '4e5f', occupation: 1, age: '30'},
        { id: 6, id_bed: '6983fa84-e51d-40f6-9a27-2e53db026edb', id_patient: '40f6', occupation: 1, age: '30'},
        { id: 7, id_bed: 'b8b32c88-1caf-484a-8966-da62897700a9', id_patient: '484a', occupation: 1, age: '30'},
        { id: 8, id_bed: '28568124-2535-44a2-b9ef-a9bb2062766d', id_patient: '44a2', occupation: 1, age: '30'},
        { id: 9, id_bed: '10764f20-2627-4aa8-bcc0-6ffb4edcaab4', id_patient: '4aa8', occupation: 2, age: '30'},
        { id: 10, id_bed:'283aca62-8b14-46b3-9ab4-556376adb278', id_patient: '46b3', occupation: 2, age: '30'},
        { id: 11, id_bed:'362b0672-7c56-4cc1-aeb2-99a1037702cf', id_patient: '4cc1', occupation: 2, age: '30'},
        { id: 12, id_bed:'08bdd74c-6ec5-4f6f-8918-349160c9969e', id_patient: '891', occupation: 0, age: '30'},
        { id: 13, id_bed:'4b5288f2-717d-4b8f-9975-7678de45a0c4', id_patient: '997', occupation: 0, age: '30'},
        { id: 14, id_bed:'9789e887-5f6d-4c72-8ffa-cfccf83a5944', id_patient: '8ff', occupation: 0, age: '30'},
        { id: 15, id_bed:'0acdb9af-1e73-4fa3-9861-fc9999b298e0', id_patient: '986', occupation: 0, age: '30'},
        { id: 16, id_bed:'4547eb6f-8e63-4974-bae2-d82affa0a04a', id_patient: 'bae', occupation: 1, age: '30'},
        { id: 17, id_bed:'e119c5d1-e919-42bb-9df8-8d97855662ef', id_patient: '9df', occupation: 1, age: '30'},
        { id: 18, id_bed:'a8a70bed-d9e7-4637-84ee-c28e804318f2', id_patient: '84e', occupation: 1, age: '30'},
        { id: 19, id_bed:'1cda7689-ff23-46e3-89cd-5d8217c5b66c', id_patient: '89c', occupation: 1, age: '30'},
        { id: 20, id_bed:'eae1d1b0-246f-4f68-84f0-733bba6b7b5e', id_patient: '84f', occupation: 1, age: '30'},
        { id: 21, id_bed:'b612e332-c9df-4dba-829c-79d6073d2222', id_patient: '829', occupation: 2, age: '30'},
        { id: 22, id_bed:'b48b26ce-650b-4331-a63b-0efd977ab790', id_patient: 'a63', occupation: 2, age: '30'},
        { id: 23, id_bed: '04e6cc85-57e5-403c-9efc-e9a3592bee47', id_patient: '4e6c', occupation: 1, age: '30'},
        { id: 24, id_bed: '34c4abaa-fe8a-4bba-ab4c-47f0912d7691', id_patient: '4c4a', occupation: 1, age: '30'},
        { id: 25, id_bed: '54e36da7-6403-4040-b594-ef1e0dc32e77', id_patient: '4e36', occupation: 1, age: '30'},
        { id: 26, id_bed: '8cdf88b6-78ee-43f1-9b7f-9265ff814ebd', id_patient: 'cdf8', occupation: 1, age: '30'},
        { id: 27, id_bed: 'e1b5ab76-37c3-4e6a-87b6-30472f0beff0', id_patient: '1b5a', occupation: 0, age: '30'},
        { id: 28, id_bed: '952f06d9-bdd6-42a3-a86f-31e9fd240031', id_patient: '52f0', occupation: 0, age: '30'},
        { id: 29, id_bed: 'a25b238d-2b09-4d6b-adae-f16f1a22f01d', id_patient: '25b2', occupation: 0, age: '30'},
        { id: 30, id_bed: '752035ed-ac0e-46c3-bb9f-cb499f97e7ca', id_patient: '5203', occupation: 0, age: '30'},
        { id: 31, id_bed: '55eb5735-9f76-4447-a1b1-7a428b606158', id_patient: '5eb5', occupation: 2, age: '30'},
        { id: 33, id_bed:'634e1ffd-7eca-4b01-b700-659a5c7c6331' , id_patient: '4e1f', occupation: 0, age: '30'}

      ]);
    });
};
