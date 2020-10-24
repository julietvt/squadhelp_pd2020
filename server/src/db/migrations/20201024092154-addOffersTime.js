'use strict';

// 20201024092154-addOffersTime.js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Offers',
        'createdAt',
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        }
        );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Offers',
        'createdAt'
    );
  }
};
