
![Node.js CI](https://github.com/johnnyvaz1/BedSystem/workflows/Node.js%20CI/badge.svg)

# Bed System
![Logo](/docs/logo2.png)

Voltado para responsáveis pela administração pública e orgãos de saúde o BedSystem  
é um software para o gerenciamento de leitos em vários hospitais
que usando etiquetas com QR Code mantém as informações atualizadas em tempo real
diferentemente dos sistemas dos próprios hospitais que não compartilham a informação,
no caso o BedSystem possui uma visão geral dos leitos

# Mapa Mental
![Mapa Mental](/docs/Gestao-de-Leitos.png)

# Problemas sendo resolvidos pelo sistema
 __Carlos Algarte (responsável pelo TI da Secretaria de Saúde de Franca)__

 * É importante fazer o monitoramento tanto dos leitos de UTI (com respirador) quanto dos leitos de internação;
 * A prefeitura tem o número de leitos total do município mas não tem o controle de leitos disponíveis de cada hospital;
 * Cidades que atendem a região (como a Santa Casa de Franca) precisam de informação de casos e de número de leitos disponíveis também dos hospitais destas outras cidades;
 * O fluxo das informações geradas pela plataforma, pelos hospitais e pela Secretaria de Saúde são importantes para os 3 e devem fluir em todos os sentidos;
 * A integração de sistemas é um obstáculo uma vez que cada Hospital / Prefeitura tem um sistema diferente;
 * Um leito de UTI fica ocupado em média de 10 a 14 dias;

 # links
 ## API
  * Listagem de Hospitais:
  http://54.209.248.173:21200/hospital
  * Listagem de Leitos
  http://54.209.248.173:21200/bed
  * Listagem de Estados
  http://54.209.248.173:21200/state
  * Listagem de País
  http://54.209.248.173:21200/country
  * Listagem de Municípios
  http://54.209.248.173:21200/city
  
  API para alteração de Status do Leito: 
   0 = Livre
   1 = Ocupado
   2 = Reservado
  
  * link + uuid + status
  
   http://54.209.248.173:21200/bed/alteroccupation/04e6cc85-57e5-403c-9efc-e9a3592bee47/0

# Dashboard
 Grafana: 
 * http://54.209.248.173:3000/d/WfiPUWjWz/hospitais?orgId=1
 Acesso Restrito


# Protótipo do APP
![APP](/docs/prototipo.png)
![QR Code](/docs/qrcode2.png)

# Imagens

![Camas Disponiveis](/docs/camas-disponiveis.png)

# Vídeo Pitch

https://youtu.be/BvsnxWF4paM

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


# Créditos

* [Johnny Vaz](https://github.com/johnnyvaz1)
* [André Luis](https://github.com/crypnet)
