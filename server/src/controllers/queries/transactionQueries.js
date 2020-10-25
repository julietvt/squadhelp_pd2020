const CONSTANTS = require('../../constants');
const db = require('../../db/models');
const NotFound = require('../../errors/UserNotFoundError');
const ServerError = require('../../errors/ServerError');
const Sequelize = require('sequelize');

module.exports.getHistoryByUserId = async (userId) => {
    const result = await db.Transactions.findAll({
        where: {
            userId,
        }
    });
    if(result.length !== 0) return result;
    throw new NotFound('No transactions');
};
/*
module.exports.getStatementByUserId = async (userId) => {
    const result = await db.Transactions.findAll({
        where:  { userId},
        attributes: [
            'typeOperation',
            [Sequelize.fn('sum', Sequelize.col('sum')), 'sum'],
        ],
        group: ['typeOperation'],
        raw: true,
    });
    if(result.length !== 0) return result;
    throw new NotFound('No transactions');
};
*/