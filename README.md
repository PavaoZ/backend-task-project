# backend-task-project

Project set up and start:

Versions:

node v12.19.0
typescript 4.3.5

Used technologies:

Typescript
Node (express)
Sequelize ORM
MYSQL

npm build -> build files
npm dev -> run locally for development purposes, nodemon runs also
npm start -> run compiled files (for production purposes)

1. Clone repository
2. Make your own .env file (.env.example included for reference)
3. Run command to install relevant node packages: npm i
4. Make sure a database server is up and running, xamp, mysql workbench, etc...
5. Run migrations with command: sequelize db:migrate
6. Run seeders with command: sequelize db:seed:all
7. Run command to start up the app locally: npm run dev
8. Enjoy.

Project recomendations:

If project gets larger separate logic to repositories, services