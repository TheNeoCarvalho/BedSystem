
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('states').del()
    .then(function () {
      // Inserts seed entries
      return knex('states').insert([
        {id: 1, initials: 'AC', name_state:'Acre'},
        {id: 2, initials: 'AL', name_state:'Alagoas'},
        {id: 3, initials: 'AM', name_state:'Amazonas'},
        {id: 4, initials: 'AP', name_state:'Amapá'},
        {id: 5, initials: 'BA', name_state:'Bahia'},
        {id: 6, initials: 'DF', name_state:'Distrito Federal'},
        {id: 7, initials: 'CE', name_state:'Ceará'},
        {id: 8, initials: 'ES', name_state:'Espírito Santo'},
        {id: 9, initials: 'GO', name_state:'Goiás'},
        {id: 10, initials: 'MA', name_state:'Maranhão'},
        {id: 11, initials: 'MT', name_state:'Mato Grosso'},
        {id: 12, initials: 'MS', name_state:'Mato Grosso do Sul'},
        {id: 13, initials: 'MG', name_state:'Minas Gerais'},
        {id: 14, initials: 'PA', name_state:'Pará'},
        {id: 15, initials: 'PB', name_state:'Paraíba'},
        {id: 16, initials: 'PE', name_state:'Pernambuco'},
        {id: 17, initials: 'PR', name_state:'Paraná'},
        {id: 18, initials: 'PI', name_state:'Piauí'},
        {id: 19, initials: 'RJ', name_state:'Rio de Janeiro'},
        {id: 20, initials: 'RN', name_state:'Rio Grande do Norte'},
        {id: 21, initials: 'RS', name_state:'Rio Grande do Sul'},
        {id: 22, initials: 'RR', name_state:'Roraima'},
        {id: 23, initials: 'RO', name_state:'Rondônia'},
        {id: 24, initials: 'SC', name_state:'Santa Catarina'},
        {id: 25, initials: 'SP', name_state:'São Paulo'},
        {id: 26, initials: 'SE', name_state:'Sergipe'},
        {id: 27, initials: 'TO', name_state:'Tocantins'},        
      ]);
    });
};
