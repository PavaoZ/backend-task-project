'use strict';
const jsonDataCombiner = require('./utils/jsonDataCombiner')
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userData1 = JSON.parse(fs.readFileSync(__dirname + '/seedData/userData1.json'))
    let userData2 = JSON.parse(fs.readFileSync(__dirname + '/seedData/userData2.json'))
    
    return queryInterface.bulkInsert('Users', jsonDataCombiner.combine(userData1, userData2));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
