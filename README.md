
![Node.js CI](https://github.com/johnnyvaz1/BedSystem/workflows/Node.js%20CI/badge.svg)

# Bed System
![Tela Inicial](/docs/logo.png)

Voltado para responsáveis pela administração pública e orgãos de saúde o BedSystem  
é um software para o gerenciamento de leitos em vários hospitais
que usando etiquetas com QR Code mantém as informações atualizadas em tempo real
diferentemente dos sistemas dos próprios internos de hospitais que não compartilham a informação, o BedSystem possui uma visão geral da cidade

Aimed at BedSystem public administration and health agencies
is software to manage beds in various hospitals
using QR Code tags keeps information updated in real time
unlike hospital internal systems that do not share information, BedSystem has an overview of the city

# Problemas sendo resolvidos pelo sistema
 __Carlos Algarte (responsável pelo TI da Secretaria de Saúde de Franca)__

 * É importante fazer o monitoramento tanto dos leitos de UTI (com respirador) quanto dos leitos de internação;
 * A prefeitura tem o número de leitos total do município mas não tem o controle de leitos disponíveis de cada hospital;
 * Cidades que atendem a região (como a Santa Casa de Franca) precisam de informação de casos e de número de leitos disponíveis também dos hospitais destas outras cidades;
 * O fluxo das informações geradas pela plataforma, pelos hospitais e pela Secretaria de Saúde são importantes para os 3 e devem fluir em todos os sentidos;
 * A integração de sistemas é um obstáculo uma vez que cada Hospital / Prefeitura tem um sistema diferente;
 * Um leito de UTI fica ocupado em média de 10 a 14 dias;

 
--------
 __O QUE É ?__

Sistema de gestão de Leitos, para gerar informação a nível macro unificando informações de vários hospitais para agilizar informações e salvar pacientes graves da falta de leito

 __O QUE NÃO É?__

Gestão evolução de pacientes;
Não será usado pelos hospitais para gestão dos pacientes;


# Próximos Recursos

 * Cadastro de usuário para gestão de cada unidade de controle
 * Impressão do QR Code

## Instalação

  npm i
  
  npm i knex -g
  
Configure o arquivo .env  

  npm run migrate
  
  npm start
