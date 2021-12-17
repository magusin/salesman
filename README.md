# salesman

Pour creer la bdd
sequelize db:create
 
Pour detruire la bdd
sequelize db:drop
 
Pour creer un model
sequelize model:generate --name NomModel --attributes name:string,age:integer
 
Pour migrer
sequelize db:migrate
Attention a l ordre des migrations, par ordre croissant
 
Pour initialiser un projet
sequelize init

Pour creer des donnees a importer
sequelize seed:generate --name roles

npm i mysql2
npm i -g sequelize-cli
npm i -g nodemon

Angular: https://angular.io/cli

installer angular:
npm install -g @angular/cli

lancer un nouveau projet:
ng n angular-name

générer composant: ng generate component name
start: npm start
build: ng build

