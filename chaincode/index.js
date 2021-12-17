'use strict';

// const regnetnetcontract = require('./contract.js');
// module.exports.contracts = [regnetnetcontract];

const registrarcontract = require('./registrar-contract');
const userscontract = require('./users-contract');
module.exports.registrarcontract = registrarcontract;
module.exports.userscontract = userscontract;
module.exports.contracts = [registrarcontract, userscontract];
